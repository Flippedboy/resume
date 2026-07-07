import path from 'path'
import { defineConfig } from '@lark-apaas/coding-preset-vite-react'

export default defineConfig({
  base: '/resume/',
  define: {
    // 注入全局GitHub地址，覆盖前端MOCK数据
    __GITHUB_URL__: JSON.stringify('https://github.com/Flippedboy/AI')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
})
