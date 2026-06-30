const placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductImage({
  alt,
  className = '',
  src,
}) {
  return (
    <img
      className={className}
      alt={alt}
      src={src || placeholderSrc}
    />
  )
}
