<template>
  <router-view></router-view>
  <div class="home_index">
    <el-card>
      <div class="content">
        <div class="bottom">
          <h3 class="title">{{ getTime() }}好呀</h3>
          <p class="subtitle">哑舍运营平台</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/uilts/time'
</script>

<style lang="scss" scoped>
body {
  display: flex;
}
.content {
  flex: 1;
  width: 100%;
}
</style>
