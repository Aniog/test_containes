import { getStrkImageUrl } from '@/lib/strkImages.js'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductImage({
  alt,
  imageId,
  query,
  ratio = '3x4',
  width = '700',
  className = '',
}) {
  const imageUrl = getStrkImageUrl(imageId)

  return (
    <img
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={imageUrl || placeholder}
    />
  )
}
