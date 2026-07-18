export const ImageHelper = {
  loadImages: (config, containerRef) => {
    if (typeof window !== 'undefined' && window.ImageHelper) {
      window.ImageHelper.loadImages(config, containerRef);
    }
  }
};