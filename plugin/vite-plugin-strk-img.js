export default function strkImgPlugin() {
  return {
    name: 'vite-plugin-strk-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
