import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCollapse = defineStore('isCollapse', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const isCollapse = ref(false)
  return {
    isCollapse,
  }
})
