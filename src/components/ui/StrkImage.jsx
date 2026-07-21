import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

/**
 * Content image backed by the strk-img stock image system.
 * The `query` should reference nearby text element IDs, e.g. `[title-id] [desc-id]`.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className,
  imgClassName,
}) {
  return (
    <div className={cn('relative overflow-hidden bg-sand', className)}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </div>
  )
}
