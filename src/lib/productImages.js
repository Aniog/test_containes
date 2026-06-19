import strkImgConfig from '@/strk-img-config.json';

function getUrl(key) {
  const entry = strkImgConfig[key];
  if (!entry || !entry.results || !entry.results.length) return '';
  return entry.results[0].url || '';
}

export function getProductImages(product) {
  const prefix = product.primaryImgKey.replace(/-\d+$/, '');
  const mainKey = `${prefix}-1-main`;

  return {
    grid: getUrl(product.primaryImgKey),
    hover: getUrl(mainKey) || getUrl(product.primaryImgKey),
    main: getUrl(mainKey) || getUrl(product.primaryImgKey),
    thumbs: product.images.map((img) => getUrl(img.id + '-thumb') || getUrl(img.id)),
  };
}
