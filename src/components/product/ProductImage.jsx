const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  product,
  imageId,
  ratio = '4x3',
  width = '700',
  className = '',
  variant = 'primary',
}) {
  const titleId = `${imageId}-title`
  const descId = `${imageId}-desc`
  const queryId = variant === 'secondary' ? `${imageId}-style` : descId

  return (
    <>
      <img
        alt={product.name}
        className={className}
        data-strk-img-id={imageId}
        data-strk-img={`[${queryId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.shortDescription}
      </span>
      <span id={`${imageId}-style`} className="sr-only">
        {product.name} worn on model warm gold jewelry editorial close up
      </span>
    </>
  )
}
