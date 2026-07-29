export default function checkPlaceholderImgPlugin() {
  return {
    name: 'vite-plugin-check-placeholder-img',
    transform(src, id) {
      if (id.endsWith('.jsx') || id.endsWith('.js')) {
        return { code: src, map: null };
      }
    }
  }
}
