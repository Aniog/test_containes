const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function EditorialImage({
  alt,
  imageId,
  query,
  ratio = '4x5',
  width = '900',
  className = '',
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
    />
  )
}
