export default function checkBrokenImgPlugin() {
  return {
    name: 'vite-plugin-check-broken-img',
    transform(src, id) {
      if (id.endsWith('.jsx') || id.endsWith('.js')) {
        return { code: src, map: null };
      }
    }
  }
}
