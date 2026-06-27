import LocalJewelryArt from './LocalJewelryArt'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  imgId,
  query,
  ratio = '4x3',
  width = '700',
  alt,
  className = '',
  src = '',
}) {
  if (src?.startsWith('/images/')) {
    return <LocalJewelryArt src={src} alt={alt} className={className} imgId={imgId} />
  }

  const imageProps = src
    ? {}
    : {
        'data-strk-img-id': imgId,
        'data-strk-img': query,
        'data-strk-img-ratio': ratio,
        'data-strk-img-width': width,
      }

  return (
    <img
      alt={alt}
      className={`block h-full w-full object-cover ${className}`}
      src={src || placeholder}
      {...imageProps}
    />
  )
}
