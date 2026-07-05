const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function StockImage({
  alt,
  imgId,
  query,
  ratio = '3x4',
  width = '900',
  className = '',
  imgRef,
  ...props
}) {
  return (
    <img
      ref={imgRef}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
      {...props}
    />
  )
}

export default StockImage
