import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import fs from 'fs'

const i18nPlugin = () => ({
  name: 'i18n-html-transform',
  handleHotUpdate({ file, server }) {
    if (file.endsWith('strings.js') || file.endsWith('.html')) {
      server.ws.send({ type: 'full-reload' });
    }
  },
  transformIndexHtml(html) {
    const code = fs.readFileSync(path.resolve(__dirname, 'src/strings.js'), 'utf-8');
    let exported = {};
    eval(code.replace(/export const strings =/, 'exported ='));
    const en = exported.en || {};
    
    return html.replace(/\{\{\s*([0-9a-zA-Z_]+)\s*\}\}/g, (match, p1) => {
      const key = p1.trim();
      return en[key] !== undefined ? en[key] : match;
    });
  }
});

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    react(),
    i18nPlugin()
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
    }
  }
})
