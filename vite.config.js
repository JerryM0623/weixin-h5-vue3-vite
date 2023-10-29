import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      //  配置 vant4 组件的自动化注册
      //  通过自动胡注册无需 impor 便可以直接使用 vant 组件库的组件标签
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    // 配置路径别名，现在可以使用 @ 代表 src 文件夹
    // 同理 views 代表的就是 src/views 文件夹
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置全局 scss 变量
        additionalData: `@import "@/style/color-variables.scss";@import "@/style/font-size-variables.scss";`,
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
