import NotFound from '@/components/exception';

/**
 * 公用页面
 * eg: 404, 500, 403 等
 */
export default [
  {
    path: '*',
    meta: {
      title: 'Page Not Found',
      ignoreAuth: true
    },
    component: NotFound
  }
];
