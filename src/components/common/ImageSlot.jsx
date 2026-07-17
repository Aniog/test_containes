import { imageMap } from '@/data/imageMap.js?probe=velmora17'

export default function ImageSlot({ id, alt, className = '' }) {
  const image = imageMap[id]

  if (!image?.url) return null

  return (
    <img
      alt={alt || image.alt || ''}
      className={className}
      src={image.url}
      loading="lazy"
    />
  )
}
