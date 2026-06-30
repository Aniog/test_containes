export default function ProductImage({
  query,
  alt,
  imgId,
  ratio = '4x3',
  width = 600,
  className = '',
  id,
}) {
  return (
    <img
      id={id}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={`[${id}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
