import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 12000,
    host: true,
    allowedHosts: true,
    cors: true,
    proxy: {
      '/heartbeat': {
        target: 'http://localhost:12001',
        changeOrigin: true
      },
      '/run': {
        target: 'http://localhost:12001',
        changeOrigin: true
      }
    },
  }
})
