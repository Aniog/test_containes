// Visual edit plugin - disabled
export default function visualEditPlugin() {
  return {
    name: 'strikingly-visual-edit-tagger',
    enforce: 'pre',
    configResolved(config) {
      // Plugin disabled
    },
    transform() {
      return null;
    }
  };
}
