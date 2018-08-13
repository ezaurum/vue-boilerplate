export default [
    {
        path: '/',
        name: 'home',
        component: () => import(
            /* webpackChunkName: "routes" */
            /* webpackMode: "lazy" */
            `@/views/Home.vue`
            )
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(
            /* webpackChunkName: "about" */
            /* webpackMode: "lazy" */
            `@/views/About.vue`)
    }
]
