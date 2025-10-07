<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.name"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <!-- 面包屑展示匹配路由的标题 -->
      <span>{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
//获取路由对象
const $route = useRoute()
</script>
<style scoped lang="scss"></style>
