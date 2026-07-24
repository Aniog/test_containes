const ProductImage = ({ alt, imageId, query, ratio, width, className = '' }) => {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  )
}

export default ProductImage
