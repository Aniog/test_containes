export default function checkBrokenImgPlugin() {
  return {
    name: 'vite-plugin-check-broken-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
