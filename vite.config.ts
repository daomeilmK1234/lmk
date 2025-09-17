import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueDevTools()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// })

export default defineConfig(({ command }) => {
  //获取各种环境下的对应的变量
  return {
    publicPath: 'https://gitee.com/jch1011/guiguzhenxuan',
    plugins: [
      vue(),
      vueDevTools(),
      viteMockServe({
        enable: command === 'serve', //保证开发阶段可以使用mock接口
      }),
    ],
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: '@use "@/style/variable.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
