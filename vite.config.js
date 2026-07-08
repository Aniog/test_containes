import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkImgPlugin from './plugin/vite-plugin-check-img.js'
import checkPlaceholderImgPlugin from './plugin/vite-plugin-check-placeholder-img.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    checkImgPlugin(),
    checkPlaceholderImgPlugin(),
    visualEditPlugin(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
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
