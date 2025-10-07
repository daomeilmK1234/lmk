export const constantRoute = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginIndex.vue'),
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/ScreenIndex.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/layout/LayoutIndex.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '主页',
        component: () => import('@/views/home/HomeIndex.vue'),
      },
      {
        path: '/system',
        name: '系统',
        component: () => import('@/views/system/index.vue'),
        children: [
          {
            path: '/system/user',
            name: '用户',
            component: () => import('@/views/system/user/index.vue'),
          },
          {
            path: '/system/role',
            name: '权限',
            component: () => import('@/views/system/role/index.vue'),
          },
        ],
      },
      {
        path: '/member',
        name: '会员',
        component: () => import('@/views/member/index.vue'),
      },
      {
        path: '/product',
        name: '产品',
        component: () => import('@/views/product/index.vue'),
      },
    ],
  },
]
