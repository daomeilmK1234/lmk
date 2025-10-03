<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <el-icon style="margin-right: 10px" @click="changeIcon">
        <component :is="LayOutSettingStore.isCollapse ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="tabbar_right">
      <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
      <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
      <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
        <!-- 表单元素 -->
        <template #reference>
          <el-button size="small" icon="Setting" circle></el-button>
        </template>
      </el-popover>
      <img
        src="@/assets/images/avatar.jpg"
        style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
      />
      <!-- 下拉菜单 -->
    </div>
    <div class="tabbar_under">
      <breadcrumb></breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumb from '../breadcrumb/index.vue'
import { useCollapse } from '@/stores/setting'
const LayOutSettingStore = useCollapse()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
}

//刷新按钮点击回调
const updateRefsh = () => {
  // 刷新当前页面
  location.reload()
}

const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  const full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}
</script>
<style scoped lang="scss">
.tabbar {
  position: relative;
  width: 100%;
  height: $base-tabbar-height;
  display: flex;
  justify-content: space-between;
  background-color: rgb(235, 235, 235);
  border: 1px solid #ddd;
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
  .tabbar_under {
    position: absolute;
    top: 50px;
    left: 25px;
  }
}
</style>
