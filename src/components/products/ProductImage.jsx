const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  product,
  mode = 'primary',
  instance = 'image',
  className = '',
  imgClassName = '',
  ratio = '3x4',
  width = '800',
}) {
  const safeInstance = instance.replace(/[^a-zA-Z0-9-]/g, '-')
  const titleId = `product-${product.id}-${safeInstance}-${mode}-title`
  const descId = `product-${product.id}-${safeInstance}-${mode}-desc`
  const query = `[${descId}] [${titleId}]`

  return (
    <div className={className}>
      <img
        data-strk-img-id={`velmora-${product.id}-${safeInstance}-${mode}-a79c2e`}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholder}
        alt={product.name}
        className={imgClassName}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {mode === 'secondary' ? product.secondImageQuery : product.imageQuery}
      </span>
    </div>
  )
}
