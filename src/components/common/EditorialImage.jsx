const placeholder = '/velmora-image-placeholder.svg'

export default function EditorialImage({
  id,
  query,
  ratio = '4x3',
  width = '900',
  alt,
  className = '',
}) {
  return (
    <img
      alt={alt}
      className={`h-full w-full object-cover transition-transform duration-700 ${className}`}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
    />
  )
}
