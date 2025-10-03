import { defineStore } from 'pinia'
import { constantRoute } from '@/router/routes'
export const useUserStore = defineStore('user', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const menuRoutes = constantRoute
  return {
    menuRoutes,
  }
})
