export const ImageHelper = {
  loadImages: (config, container) => {
    console.log('Mock ImageHelper.loadImages called with:', { config, container });
    return () => console.log('Mock ImageHelper cleanup');
  }
};
