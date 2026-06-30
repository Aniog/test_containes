// Stub for @strikingly/sdk - provides ImageHelper.loadImages no-op
const ImageHelper = {
  loadImages(_config, _container) {
    // No-op: images are loaded via the strk-img plugin at build time
    return () => {}
  },
}

export { ImageHelper }