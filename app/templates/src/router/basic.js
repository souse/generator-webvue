export default [
  {
    path: '/',
    title: 'home',
    ignoreAuth: false,
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  }
];
