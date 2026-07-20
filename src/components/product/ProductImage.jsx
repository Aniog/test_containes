export default function ProductImage({ product, imageId, className = '', ratio = '4x3', width = '700', contextId = 'bestsellers-title' }) {
  const imageContextId = `${imageId}-context`

  return (
    <>
      <span id={imageContextId} className="sr-only" aria-hidden="true">{product.imageContext}</span>
      <img
        alt={product.name}
        className={className}
        data-strk-img-id={imageId}
        data-strk-img={`[${imageContextId}] [${product.descId}] [${product.titleId}] [${contextId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
      />
    </>
  )
}
