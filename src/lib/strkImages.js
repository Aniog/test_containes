import { imageAssets } from '@/data/imageAssets.js'

export function getStrkImageUrl(imageId) {
  return imageAssets?.[imageId] || ''
}
