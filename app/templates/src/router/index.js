import Vue from 'vue';
import Router from 'vue-router';

import beforeEachHooks from './beforeEachHooks';
import Common from './routers/common';
import Basic from './basic';

Vue.use(Router);

const routes = [...Basic, ...Common];

const routerInstance = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Object.values(beforeEachHooks).forEach(hook => {
  routerInstance.beforeEach(hook);
});

export default routerInstance;
