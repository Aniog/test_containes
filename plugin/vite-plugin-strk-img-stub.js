export default function pluginStub() {
  return {
    name: 'plugin-stub',
    transform(code, id) {
      return code;
    }
  };
}
