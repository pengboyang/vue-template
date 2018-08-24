export default [
  {
    meta: {
      title: 'home',
      keepAlive: false,
      isBack:false,
    },
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['components/HelloWorld'], resolve)
  },
];
