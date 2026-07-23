const imageFallback = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export default function ProductImage({ product, variant = 'main', className = '', contextId = 'product-context-title', slotId = 'default' }) {
  const baseImgId = variant === 'hover' ? product.hoverImageId : product.imageId
  const safeSlot = `${slotId}-${product.id}-${variant}`
  const productTitleId = `${safeSlot}-image-title`
  const productDescId = `${safeSlot}-image-desc`

  return (
    <>
      <span id={productTitleId} className="sr-only">{product.name}</span>
      <span id={productDescId} className="sr-only">{product.description}</span>
      <img
        alt={product.name}
        className={className}
        data-strk-img-id={`${baseImgId}-${slotId}`}
        data-strk-img={`[${productDescId}] [${productTitleId}] [${contextId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="900"
        src={imageFallback}
      />
    </>
  )
}
