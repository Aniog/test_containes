import strkImgConfig from '@/strk-img-config.json?import&v=20260630a'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const preferredResultIndexes = {
  'hero-jewelry-model-bg-e72f4a': 1,
  'product-majestic-flora-detail-a31c58': 1,
  'product-majestic-flora-primary-b74d11': 1,
  'product-majestic-flora-hover-c03f8a': 2,
  'product-majestic-flora-worn-f92d70': 2,
}

export function getImageSource(imageId) {
  const results = strkImgConfig?.[imageId]?.results ?? []
  const preferredIndex = preferredResultIndexes[imageId] ?? 0
  return results[preferredIndex]?.url ?? results[0]?.url ?? placeholder
}

export default function ProductImage({ imageId, alt, className = '' }) {
  return <img alt={alt} className={className} src={getImageSource(imageId)} />
}
