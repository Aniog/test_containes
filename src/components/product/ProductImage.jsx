const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export default function ProductImage({
  imgId,
  query,
  ratio = '4x3',
  width = '800',
  alt,
  className = '',
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
    />
  )
}
