import { placeholderImage } from '@/data/products'

export default function ProductMedia({
  imgId,
  query,
  ratio = '4x3',
  width = '700',
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
      src={placeholderImage}
    />
  )
}
