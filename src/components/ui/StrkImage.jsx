import { cn } from '@/lib/utils'

// A content image backed by the strk stock-image system.
// `query` should reference nearby text element IDs, e.g. "[p-title] [p-tagline]".
// NOTE: `src` must be an inline string literal (not a const) so the strk-img
// build plugin can statically resolve and inline the image URL at build time.
export default function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className,
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={cn('block w-full h-full object-cover', className)}
      {...rest}
    />
  )
}
