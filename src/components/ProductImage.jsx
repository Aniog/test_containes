const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function ProductImage({ product, variant = 'main', context, className = '', titleId, descId }) {
  const fallbackId = product.id ? `${context}-${variant}-${product.id}` : `${context}-${variant}`
  const imageId = variant === 'hover' ? product.hoverImgId : variant === 'main' ? product.imgId : fallbackId
  const titleRefId = titleId || product.titleId
  const descRefId = descId || product.descId

  return (
    <img
      alt={product.name}
      className={className}
      data-strk-img-id={imageId}
      data-strk-img={`[${descRefId}] [${titleRefId}]`}
      data-strk-img-ratio="4x3"
      data-strk-img-width="900"
      src={placeholder}
    />
  )
}

export default ProductImage
