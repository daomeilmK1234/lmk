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
]
