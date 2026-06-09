import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 12000,
    host: true,
    allowedHosts: true,
    cors: true,
  }
})
