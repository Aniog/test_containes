export default function checkPlaceholderImgPlugin() {
  return {
    name: 'vite-plugin-check-placeholder-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
