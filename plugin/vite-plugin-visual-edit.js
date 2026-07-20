export default function visualEditPlugin() {
  return {
    name: 'vite-plugin-visual-edit',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
