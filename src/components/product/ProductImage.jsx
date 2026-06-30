const placeholder =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductImage({
  product,
  imageId,
  ratio = '4x3',
  width = '900',
  className = '',
  titleId,
  descId,
  alt,
}) {
  const queryRefs = titleId && descId ? `[${descId}] [${titleId}]` : undefined

  return (
    <img
      alt={alt || product.name}
      className={className}
      data-strk-img-id={imageId}
      data-strk-img={queryRefs}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
    />
  )
}
