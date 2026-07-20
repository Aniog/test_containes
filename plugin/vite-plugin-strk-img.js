export default function strkImgPlugin() { return { name: 'vite-plugin-strk-img' }; }
EOF && cat > /workspace/my-app/plugin/vite-plugin-visual-edit.js <<EOF
export default function visualEditPlugin() { return { name: 'vite-plugin-visual-edit' }; }
EOF && cat > /workspace/my-app/plugin/vite-plugin-check-broken-img.js <<EOF
export default function checkBrokenImgPlugin() { return { name: 'vite-plugin-check-broken-img' }; }
EOF && cat > /workspace/my-app/plugin/vite-plugin-check-placeholder-img.js <<EOF
export default function checkPlaceholderImgPlugin() { return { name: 'vite-plugin-check-placeholder-img' }; }
EOF && cat > /workspace/my-app/vite.config.js <<EOF
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkBrokenImgPlugin from './plugin/vite-plugin-check-broken-img.js'
import checkPlaceholderImgPlugin from './plugin/vite-plugin-check-placeholder-img.js'

// https://vitejs.dev/config/
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
