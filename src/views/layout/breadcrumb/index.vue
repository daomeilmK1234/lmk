<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item> list</el-breadcrumb-item>
    <el-breadcrumb-item> detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
