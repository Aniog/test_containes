import strkImgConfig from '../strk-img-config.json';

// Get the first image URL for a product from strk-img-config
export const getProductImageUrl = (productId) => {
  // Try to find the main image for this product
  const mainKey = `product-${productId}-main`;
  const configEntry = strkImgConfig[mainKey];
  
  if (configEntry && configEntry.results && configEntry.results.length > 0) {
    // Return the first result URL
    return configEntry.results[0].url;
  }
  
  // Fallback: return empty string if not found
  return '';
};

// Get the image URL for a specific image key
export const getImageUrl = (imageKey) => {
  const configEntry = strkImgConfig[imageKey];
  
  if (configEntry && configEntry.results && configEntry.results.length > 0) {
    return configEntry.results[0].url;
  }
  
  return '';
};
