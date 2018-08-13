export default [
    {
        path: '*',
        meta: {
            public: true,
        },
        redirect: {
            path: '/404'
        }
    },
    {
        path: '/404',
        meta: {
            public: true,
        },
        name: 'NotFound',
        component: () => import(
            /* webpackChunkName: "routes" */
            /* webpackMode: "lazy" */
            `@/pages/NotFound.vue`
            )
    },
    {
        path: '/403',
        meta: {
            public: true,
        },
        name: 'AccessDenied',
        component: () => import(
            /* webpackChunkName: "routes" */
            /* webpackMode: "lazy" */
            `@/pages/Deny.vue`
            )
    },
    {
        path: '/500',
        meta: {
            public: true,
        },
        name: 'ServerError',
        component: () => import(
            /* webpackChunkName: "routes" */
            /* webpackMode: "lazy" */
            `@/pages/Error.vue`
            )
    },
]
