<template>
  <router-view></router-view>
  <div class="home_index">
    <el-card class="box-card">
      <div class="content">
        <div class="bottom">
          <h3 class="title">{{ getTime() }}好呀！</h3>
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
.home_index {
  .box-card {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    background: url('@/assets/images/home_bg.jpg') no-repeat;
    background-size: cover;
    box-shadow: none;
    border-radius: 10px;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .bottom {
        text-align: center;
        color: white;

        .title {
          font-size: 30px;
          font-weight: 900;
          margin-bottom: 30px;
          color: rgb(0, 0, 0);
          margin-left: 20px;
        }

        .subtitle {
          font-style: italic;
          color: skyblue;
        }
      }
    }
  }
}
</style>
