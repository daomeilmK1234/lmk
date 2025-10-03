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
    name: 'Layout',
    component: () => import('@/views/layout/LayoutIndex.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/HomeIndex.vue'),
      },
      {
        path: '/system',
        name: 'System',
        component: () => import('@/views/system/index.vue'),
        children: [
          {
            path: '/system/user',
            name: 'User',
            component: () => import('@/views/system/user/index.vue'),
          },
          {
            path: '/system/role',
            name: 'Role',
            component: () => import('@/views/system/role/index.vue'),
          },
        ],
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import('@/views/member/index.vue'),
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/product/index.vue'),
      },
    ],
  },
]
