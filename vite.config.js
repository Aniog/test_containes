import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const useStrkPlugins = process.env.ENABLE_STRK_DEV_PLUGINS !== 'false'

export default defineConfig({
  plugins: [
    ...(useStrkPlugins
      ? [
          (await import('./plugin/vite-plugin-strk-img.js')).default(),
          (await import('./plugin/vite-plugin-check-img.js')).default(),
          (await import('./plugin/vite-plugin-check-placeholder-img.js')).default(),
          (await import('./plugin/vite-plugin-visual-edit.js')).default(),
        ]
      : []),
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
      interval: 100, // Check for changes every 100ms
    },
  }
})
