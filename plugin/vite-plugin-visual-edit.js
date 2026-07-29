export default function visualEditPlugin() {
  return {
    name: 'vite-plugin-visual-edit',
    transform(src, id) {
      if (id.endsWith('.jsx') || id.endsWith('.js')) {
        return { code: src, map: null };
      }
    }
  }
}
