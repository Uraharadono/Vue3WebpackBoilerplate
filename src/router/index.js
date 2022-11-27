// import Vue from "vue";
//import VueRouter from "vue-router";
// import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import Home from "@/views/Home.vue";
import NProgress from "nprogress";

Vue.use(VueRouter);

/* Note: Didn't use "@" alias here, as it is easier for me to find views like this. Please follow along. */

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "auth" */ "../views/Auth/Login.vue"),
    },

    {
        path: "/login-2fa",
        name: "Login2FA",
        component: () =>
            import(/* webpackChunkName: "auth" */ "../views/Auth/Login2FA.vue"),
    },
    {
        path: "/2fa-setup",
        name: "Setup2FA",
        component: () =>
            import(/* webpackChunkName: "auth" */ "../views/Auth/Setup2FA.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "auth" */ "../views/Auth/Register.vue"),
    },
    {
        path: "/forgot-password",
        name: "Forgot password",
        component: () =>
            import(
                /* webpackChunkName: "auth" */ "../views/Auth/ForgotPassword.vue"
            ),
    },
    {
        path: "/reset-password",
        name: "Reset password",
        component: () =>
            import(
                /* webpackChunkName: "auth" */ "../views/Auth/ResetPassword.vue"
            ),
    },

    // Terms of service
    {
        path: "/terms-of-service/NL",
        name: "Terms of service - NL",
        component: () =>
            import(
                /* webpackChunkName: "tos" */ "../views/Shared/TOS/TosNL.vue"
            ),
    },

    // otherwise redirect to page not found
    // { path: "*", redirect: "/" },
    {
        path: "*",
        component: () =>
            import(/* webpackChunkName: "other" */ "../views/Shared/404.vue"),
    },
];

const router = new VueRouter({
    // linkActiveClass: 'active',
    base: "/",
    mode: "history",
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = [
        "/login",
        "/login-2fa",
        "/2fa-setup",
        "/register",
        "/forgot-password",
        "/reset-password",
    ];
    const authRequired = !publicPages.includes(to.path);
    const loggedInUser = localStorage.getItem("currentUser");

    if (authRequired) {
        if(!loggedInUser)
        {
            // return next("/login");

            const returnPath = window.location.pathname;
            return next({ name: 'Login', query: { returnUrl: returnPath } });

            // No need for this now, as we are dealing with this on the "Setup2FA" page
            //if(loggedInUser.tfaEnabled && loggedInUser.token)
            //    return next("/login-2fa");
        }
    }

    next();
});

export default router;
