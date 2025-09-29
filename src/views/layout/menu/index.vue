<template>
  <el-menu class="el-menu" text-color="#fff" :collapse="Collapse.isCollapse">
    <el-menu-item index="0">
      <el-icon><HomeFilled /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><document /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">角色管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-2">用户管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">权限管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Platform /></el-icon>
      <span>数据大屏</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>会员管理</span>
    </el-menu-item>
    <el-menu-item index="4">
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
const goRoute = (vc: any) => {
  //路由跳转
  $router.push(vc.index)
}
const Collapse = useCollapse()
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>
