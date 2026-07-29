export default function strkImgPlugin() {
  return {
    name: 'vite-plugin-strk-img',
    transform(src, id) {
      if (id.endsWith('.jsx') || id.endsWith('.js')) {
        return { code: src, map: null };
      }
    }
  }
}
