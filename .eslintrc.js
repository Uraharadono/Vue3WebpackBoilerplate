// https://dev.to/ferasdawod/setting-up-eslint-for-a-vuejs-project-using-vs-code-i54
module.exports = {
    root: true,
    env: {
        // this section will be used to determine which APIs are available to us
        // (i.e are we running in a browser environment or a node.js env)
        node: true,
        browser: true,
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        // specifying a module sourcetype prevent eslint from marking import statements as errors
        sourceType: "module",
        ecmaVersion: 6,
    },
    extends: [
        // use the recommended rule set for both plain javascript and vue
        "eslint:recommended",
        "plugin:vue/recommended",
    ],
    rules: {
        // we should always disable console logs and debugging in production
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        // Mikey styles below
        "vue/this-in-template": "off",
        "vue/max-attributes-per-line": "off",
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "never",
            },
        ],
        "vue/multiline-html-element-content-newline": [
            "error",
            {
                ignoreWhenEmpty: true,
                // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
                allowEmptyLines: true,
            },
        ],
        "no-var": 1,

        "consistent-return": 0,
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        indent: [
            "error",
            4,
            // "tab",
            {
                SwitchCase: 1,
                // ignoredNodes: ['ConditionalExpression'],
                // "MemberExpression": 1
            },
        ],
        // "no-tabs": 0,
    },
};
