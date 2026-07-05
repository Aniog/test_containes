import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkImgPlugin from './plugin/vite-plugin-check-img.js'

export default defineConfig(({ command }) => {
  const enableServeImageProcessing = process.env.STRK_ENABLE_STRK_IMG_SERVE === '1'
  const enableImageChecks = process.env.STRK_ENABLE_IMAGE_CHECKS === '1'
  const enableVisualEdit = process.env.STRK_ENABLE_VISUAL_EDIT === '1'
  const requestedPort = Number(process.env.PORT || 12000)

  return {
    plugins: [
      ...(command === 'build' || enableServeImageProcessing ? [strkImgPlugin()] : []),
      ...(command === 'build' || enableImageChecks ? [checkImgPlugin()] : []),
      ...(command === 'serve' && enableVisualEdit ? [visualEditPlugin()] : []),
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: Number.isFinite(requestedPort) ? requestedPort : 12000,
      host: true,
      allowedHosts: true,
      cors: true,
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
      hmr: {
        overlay: false,
      },
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  }
})
