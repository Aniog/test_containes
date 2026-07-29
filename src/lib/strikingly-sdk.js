export const ImageHelper = {
  loadImages: (config, container) => {
    console.log("ImageHelper.loadImages", config, container);
    // Real implementation would scan for [data-strk-img] etc.
    // For now, this mock prevents build errors.
    return () => {};
  }
};
