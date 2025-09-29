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
    ],
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: '/system/user',
        name: 'User',
        component: () => import('@/views/home/HomeIndex.vue'),
      },
    ],
  },
]
