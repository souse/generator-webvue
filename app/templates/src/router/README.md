##### 路由规则 路径小写
```
{
  path: '*', // 匹配路由
  // 需要验证的时候可以不加 mate值
  meta: {
    title: 'Page Not Found', // 组件页title
    ignoreAuth: true // 是否需要权限校验
  },
  component: NotFound // 引用组件
}
```javascript