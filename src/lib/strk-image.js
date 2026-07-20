import strkImgConfig from '@/strk-img-config.json'

export function getStrkImageUrl(imageId) {
  return strkImgConfig?.[imageId]?.results?.[0]?.url || ''
}

export function getProductImageUrl(product, kind = 'primary') {
  const imageId = kind === 'hover' ? product.hoverImgId : product.imgId
  return getStrkImageUrl(imageId)
}

export function getPdpImageUrl(product, imageId, size = 'large') {
  const key = `${imageId}-${size}`
  return getStrkImageUrl(key) || getProductImageUrl(product)
}
