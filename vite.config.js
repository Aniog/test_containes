import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import checkImgPlugin from './plugin/vite-plugin-check-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    strkImgPlugin(),
    checkImgPlugin(),
    visualEditPlugin(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: true,
    allowedHosts: true,
    cors: true,
    proxy: {
      '/heartbeat': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
      '/run': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    },
  }
})
