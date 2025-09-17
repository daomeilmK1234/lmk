<template>
  <div class="layout_container">
    <div class="layout_silder">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :default-active="$route.path"
          background-color="$base-menu-background"
          text-color="#ccc"
          active-text-color="yellowgreen"
        >
          <!-- 根据路由动态生成菜单 -->
          <Menu></Menu>
        </el-menu>
      </el-scrollbar>
      <div class="layout_tabbar">
        <!-- 顶部tabbar -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
}

.layout_silder {
  width: $base-menu-width;
  height: 100vh;
  background-color: $base-menu-background;
  color: white;
  transition: all 0.3s;

  &.fold {
    width: $base-menu-min-width;
  }

  .scrollbar {
    width: 100%;
    height: calc(100vh - $base-menu-logo-height);

    .el-menu {
      border-radius: none;
    }
  }
}

.layout_tabbar {
  position: fixed;
  width: calc(100% - $base-menu-width);
  height: $base-tabbar-height;
  top: 0;
  left: $base-menu-width;
  color: #000;
  transition: all 0.3s;

  &.fold {
    width: calc(100vw - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}

.layout_main {
  position: absolute;
  width: calc(100% - $base-menu-width);
  height: calc(100vh - $base-tabbar-height);
  left: $base-menu-width;
  top: $base-tabbar-height;
  padding: 20px;
  overflow: auto;
  transition: all 0.3s;

  &.fold {
    width: calc(100vw - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}
</style>
