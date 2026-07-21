import { buildStrkImgPlaceholder } from '@/lib/image-utils'

const placeholder = buildStrkImgPlaceholder()

export default function StockImage({
  imgId,
  query,
  ratio = '4x3',
  width = 800,
  alt = '',
  className = '',
  loading = 'lazy',
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
      alt={alt}
      loading={loading}
      className={className}
    />
  )
}
