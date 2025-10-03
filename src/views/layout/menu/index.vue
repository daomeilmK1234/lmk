<template>
  <el-menu
    class="el-menu"
    text-color="#ccc"
    :collapse="Collapse.isCollapse"
    popper-effect="light"
    unique-opened
    collapse-transition
  >
    <el-menu-item index="0" @click="$router.push('/home')">
      <el-icon><HomeFilled /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><document /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="$router.push('/system/user')">用户管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-2" @click="$router.push('/system/role')">权限管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2" @click="$router.push('/screen')">
      <el-icon><Platform /></el-icon>
      <span>数据大屏</span>
    </el-menu-item>
    <el-menu-item index="3" @click="$router.push('/member')">
      <el-icon><document /></el-icon>
      <span>会员管理</span>
    </el-menu-item>
    <el-menu-item index="4" @click="$router.push('/product')">
      <el-icon><document /></el-icon>
      <span>商品管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCollapse } from '@/stores/setting'
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])

//获取路由器对象
const $router = useRouter()
//点击菜单的回调
const Collapse = useCollapse()
</script>
<script lang="ts">
export default {
  name: 'MyMenu',
}
</script>

<style>
.el-menu {
  border-right: none;
}
/* 修改下拉菜单背景色和文字颜色 */
.el-menu--popup {
  background-color: #1e1e1e; /* 深色背景 */
}
.el-menu--popup .el-menu-item {
  color: #ccc; /* 浅色文字 */
}
.el-menu--popup .el-menu-item:hover {
  color: yellowgreen; /* 鼠标悬停时的文字颜色 */
  background-color: #2e2e2e; /* 鼠标悬停时的背景色 */
  border-radius: 8px; /* 圆角大小 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3); /* 阴影效果 */
}
</style>
