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
      decoding="async"
      loading="lazy"
    />
  )
}
