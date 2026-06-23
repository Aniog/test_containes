import { IMAGE_PLACEHOLDER, resolveStockImageUrl } from '@/lib/stock-images.js'

const ProductImage = ({
  imageId,
  configKey,
  query,
  alt,
  ratio = '4x3',
  width = '700',
  className = ''
}) => {
  const resolvedSrc = resolveStockImageUrl(configKey || imageId)
  const shouldUseRuntime = !resolvedSrc

  return (
    <img
      alt={alt}
      className={className}
      {...(shouldUseRuntime
        ? {
            'data-strk-img-id': imageId,
            'data-strk-img': query,
            'data-strk-img-ratio': ratio,
            'data-strk-img-width': width
          }
        : {})}
      loading="lazy"
      src={resolvedSrc || IMAGE_PLACEHOLDER}
    />
  )
}

export default ProductImage
