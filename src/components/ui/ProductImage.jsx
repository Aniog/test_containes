import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

/**
 * Product image using the strk-img stock system.
 * `query` should reference element IDs, e.g. "[prod-x-title] [prod-x-desc]".
 */
export default function ProductImage({
  imgId,
  query,
  ratio = '4x5',
  width = 600,
  alt = '',
  className,
  src,
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={src || PLACEHOLDER}
      alt={alt}
      className={cn('h-full w-full object-cover', className)}
      loading="lazy"
    />
  )
}
