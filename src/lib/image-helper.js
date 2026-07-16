/**
 * ImageHelper - A simplified version of the Strk SDK's ImageHelper
 * for demonstration and consistency.
 */
export const ImageHelper = {
  /**
   * Scans the DOM for data-strk-img and data-strk-bg attributes
   * and triggers the image loading system.
   */
  loadImages: (config, container) => {
    if (typeof window === 'undefined' || !window.ImageHelper) {
      console.warn('ImageHelper SDK is not available on the window object.');
      return () => {};
    }
    return window.ImageHelper.loadImages(config, container);
  }
};
