const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
let webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const fs = require('fs'); // for file writing on production build - web.config to host static files on IIS

// let environment =  process.env.NODE_ENV === "production" ? "production" : "development"; // this doesn't work ffs
let API_BASE_URL = {
    production: JSON.stringify("https://api.someurl.com"),
    development: JSON.stringify("https://localhost:44365"),
};

module.exports = (env, argv) => {
    return {
        entry: {
            main: "./src/main.js",
            // main: "./src/main.ts",
            // vendor: // TODO
        },
        output: {
            filename: "[name].[contenthash:8].js",
            // path: path.resolve(__dirname, "dist"),
            path: path.resolve(__dirname, "./dist"),
            chunkFilename: "[name].[contenthash:8].js",
            // I need this literally just so I can use background images in scss
            publicPath: "/", // https://stackoverflow.com/questions/64294706/webpack5-automatic-publicpath-is-not-supported-in-this-browser and is also needed for vue-router to work properly: https://stackoverflow.com/questions/44074086/vue-router-failed-to-resolve-async-component-after-reloading-page
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: { appendTsSuffixTo: [/\.vue$/] }
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                },
                {
                    test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name][contenthash:8].[ext]",
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name][contenthash:8].[ext]",
                        outputPath: "assets/img",
                        esModule: false,
                    },
                },
                {
                    test: /\.s?css$/,
                    use: [
                        // I cannot use both "style-loader" and MiniCssExtractPlugin.loader together. It drops a fuck ton of errors.
                        // More about it can be read about here: https://stackoverflow.com/a/64320105/4267429
                        // "style-loader",
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer()],
                                },
                            },
                        },
                        "sass-loader",
                    ],
                },
            ],
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash:8].css",
                chunkFilename: "[name].[contenthash:8].css",
            }),
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
                favicon: "./public/favicon.ico",
            }),
            new webpack.DefinePlugin({
                // vue3 feature flags <http://link.vuejs.org/feature-flags>
                // https://stackoverflow.com/a/70093702/4267429
                __VUE_OPTIONS_API__: 'true',
                __VUE_PROD_DEVTOOLS__: 'false',

                // API_BASE_URL: API_BASE_URL[environment],
                API_BASE_URL: API_BASE_URL[argv.mode],
            }),
            // Look at MyNotes point 15 why we need this.
            new webpack.EnvironmentPlugin({
                BUILD: "web",
            }),

            // NOTE 17: THIS IS HACK! But there was no other way to do this :(
            // I need this line below to exit when I build production files "npm run production" because it was not working when doing Azure stuff
            // I saw this here: https://stackoverflow.com/a/60716053/4267429
            {
                apply: (compiler) => {
                    compiler.hooks.done.tap('DonePlugin', (stats) => {
                        console.log('Compile is done !')
                        console.log('argv.mode!', argv.mode)
                        if(argv.mode == "production")
                        {
                            console.log("usao je da exita")
                            console.log("__dirname", __dirname)
                            setTimeout(() => {

                                // NOTE 18: PLEASE READ, THIS IS IMPORTANT
                                const savePath = __dirname + "/dist";
                                const fullPath = savePath + "/web.config";
                                // Old config without the http to https redirection
                                // const content = '<?xml version="1.0" encoding="utf-8"?> <configuration> <system.webServer> <rewrite> <rules> <rule name="Handle History Mode and custom 404/500" stopProcessing="true"> <match url="(.*)" /> <conditions logicalGrouping="MatchAll"> <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" /> <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" /> </conditions> <action type="Rewrite" url="/" /> </rule> </rules> </rewrite> <httpErrors> <remove statusCode="404" subStatusCode="-1" /> <remove statusCode="500" subStatusCode="-1" /> <error statusCode="404" path="/survey/notfound" responseMode="ExecuteURL" /> <error statusCode="500" path="/survey/error" responseMode="ExecuteURL" /> </httpErrors> <modules runAllManagedModulesForAllRequests="true"/> </system.webServer> </configuration>';
                                // New web.config with http to https redirection
                                const content = '<?xml version="1.0" encoding="utf-8"?> <configuration> <system.webServer> <rewrite> <rules> <rule name="Handle History Mode and custom 404/500" stopProcessing="true">   <match url="(.*)" />   <conditions logicalGrouping="MatchAll">   <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />   <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />   </conditions>   <action type="Rewrite" url="/" /> </rule>  <rule name="Redirect from http to https" stopProcessing="true">   <match url="(.*)" />   <conditions>   <add input="{HTTPS}" pattern="^OFF$" />   </conditions>   <action type="Redirect" url="https://{HTTP_HOST}{REQUEST_URI}" appendQueryString="false" redirectType="Permanent" /> </rule> </rules> </rewrite> <httpErrors> <remove statusCode="404" subStatusCode="-1" /> <remove statusCode="500" subStatusCode="-1" /> <error statusCode="404" path="/survey/notfound" responseMode="ExecuteURL" /> <error statusCode="500" path="/survey/error" responseMode="ExecuteURL" /> </httpErrors> <modules runAllManagedModulesForAllRequests="true" /> </system.webServer> </configuration>';
                                // Note: "Sync" keyword has to be specified because "writeFile" is async by default
                                fs.writeFileSync(fullPath, content, function (err) {
                                    if (err) console.error(err);
                                    console.log('File is created successfully.');
                                });

                                // Exit process
                                process.exit(0)
                            })
                        }
                    });
                }
            }
        ],
        resolve: {
            alias: {
                // 'vue': '@vue/runtime-dom',
                "Vue": 'vue/dist/vue.esm-bundler.js',
                "@": path.resolve(__dirname, "./src"),
            },
            // extensions: [ '.tsx', '.ts', '.js', '.vue' ],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
        },
        optimization: {
            // "hashed" is removed, this new logic can be found here: https://webpack.js.org/guides/caching/
            moduleIds: "deterministic",
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        priority: -10,
                        chunks: "all",
                    },
                },
            },
        },
        devServer: {
            historyApiFallback: true,
        },
        //externals: {
        //    vue: "Vue",
        //},
    };
};
