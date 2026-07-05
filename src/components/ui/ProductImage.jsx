const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  product,
  variant,
  imgId,
  ratio = '4x3',
  width = 600,
  className = '',
  alt,
}) {
  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`

  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={`[${descId}] [${titleId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt || product.name}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}

export function BackgroundImage({
  bgId,
  ratio = '16x9',
  width = 1600,
  className = '',
  query = '',
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={`absolute inset-0 bg-warm-gray ${className}`}
    />
  )
}
