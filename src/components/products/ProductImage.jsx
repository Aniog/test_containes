const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function ProductImage({
  product,
  idPrefix = 'product',
  variant = 'primary',
  ratio = '4x3',
  width = '800',
  className = '',
}) {
  const titleId = `${idPrefix}-${product.id}-${variant}-title`
  const descId = `${idPrefix}-${product.id}-${variant}-desc`
  const queryId = `${idPrefix}-${product.id}-${variant}`
  const imagePrompt =
    variant === 'secondary'
      ? `[${descId}] [${titleId}] styled on model warm gold jewelry editorial close-up`
      : `[${descId}] [${titleId}] warm gold jewelry luxury still life editorial`

  return (
    <>
      <img
        alt={product.name}
        className={className}
        data-strk-img-id={queryId}
        data-strk-img={imagePrompt}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholder}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.description}
      </span>
    </>
  )
}

export default ProductImage
