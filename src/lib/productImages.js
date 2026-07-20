import strkImgConfig from '../strk-img-config.json';

const productImageMap = {};

Object.entries(strkImgConfig).forEach(([key, value]) => {
  if (key.startsWith('card-') && key.endsWith('-1') && value.picked) {
    const result = value.results?.find(r => r.id === value.picked);
    if (result?.url) {
      const productId = key.replace(/^card-/, '').replace(/-1$/, '');
      productImageMap[productId] = result.url;
    }
  }
});

export function getProductImageUrl(productId) {
  return productImageMap[productId] || null;
}
