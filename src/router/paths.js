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
    },
    {
        path: '/pets',
        component: () => import(
            /* webpackChunkName: "pets" */
            /* webpackMode: "lazy" */
            `@/views/pets/Base.vue`),
        children: [
            {
                path: '',
                component: () => import(
                    /* webpackChunkName: "pets" */
                    /* webpackMode: "lazy" */
                    `@/views/pets/List.vue`),
            },
            {
                path: ':id',
                component: () => import(
                    /* webpackChunkName: "pets" */
                    /* webpackMode: "lazy" */
                    `@/views/pets/Pet.vue`),
            }
        ]
    }
]
