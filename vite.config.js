import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkBrokenImgPlugin from './plugin/vite-plugin-check-broken-img.js'
import checkPlaceholderImgPlugin from './plugin/vite-plugin-check-placeholder-img.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    checkBrokenImgPlugin(),
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
    port: 8080,
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
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms
    },
  }
})
