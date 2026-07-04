import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkImgPlugin from './plugin/vite-plugin-check-img.js'

const port = Number(process.env.VITE_PORT) || 12000

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    checkImgPlugin(),
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
    port,
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  preview: {
    host: '0.0.0.0',
    port,
    allowedHosts: true,
    cors: true,
  }
})
