const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

export default function StrkImage({
  id,
  query,
  ratio = '4x3',
  width = '800',
  alt,
  className = '',
}) {
  return (
    <img
      src={placeholder}
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      loading="lazy"
    />
  )
}
