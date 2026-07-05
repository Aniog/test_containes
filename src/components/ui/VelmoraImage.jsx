import { PLACEHOLDER_IMG } from '@/data/products'

export default function VelmoraImage({
  product,
  index = 0,
  imgId,
  alt,
  ratio = '3x4',
  width = '600',
  className = '',
  priority = false,
}) {
  const query = `[product-${product.id}-desc] [product-${product.id}-name]`
  return (
    <img
      data-strk-img-id={imgId || `img-${product.id}-${index}`}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_IMG}
      alt={alt || product.name}
      loading={priority ? 'eager' : 'lazy'}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}
