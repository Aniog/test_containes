import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 12000,
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
    proxy: {
      '/heartbeat': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/run': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
})