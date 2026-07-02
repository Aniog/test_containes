const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  product,
  hover = false,
  className = '',
  ratio = '4x3',
  width = '600',
  imgId,
  alt,
}) {
  const id = imgId || (hover ? product.hoverImgId : product.imgId)
  const query = `[${product.descId}] [${product.titleId}]`
  const imageAlt = alt || product.name

  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={imageAlt}
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  )
}
