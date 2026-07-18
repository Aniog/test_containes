import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import checkBrokenImgPlugin from './plugin/vite-plugin-check-broken-img.js'
import checkPlaceholderImgPlugin from './plugin/vite-plugin-check-placeholder-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
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
    port: 8080,
    host: true,
    allowedHosts: true,
    cors: true,
  }
})
