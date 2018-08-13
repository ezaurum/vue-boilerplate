import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths';
import defaultPaths from './default-paths';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);
const router =  new Router({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes: defaultPaths.concat(paths)
});

// router gards
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach((to, from) => {
    // ...
    NProgress.done();
});

export default router;


