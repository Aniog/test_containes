const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export default function ProductImage({ id, query, alt, ratio = '4x3', width = '900', className = '' }) {
  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
      alt={alt}
      className={className}
    />
  )
}
