import { getStrkImageUrl } from '@/lib/strkImageUrl'

const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

// Renders an <img> with the strk-img data attributes the runtime looks for.
// The page-level effect (calling ImageHelper.loadImages on a stable container
// ref) resolves the data-strk-img-id against strk-img-config.json and replaces
// the placeholder with the real asset URL by mutating the `src` attribute.
//
// IMPORTANT: we do NOT bind `src` to React state. The strk-img runtime mutates
// the DOM `src` directly via setAttribute. If we recompute the URL ourselves
// on every React re-render and pass it through `src={...}`, React's reconciler
// will overwrite the runtime's setting. That was the source of the cart
// drawer "stuck on placeholder" bug.
export default function StockImage({
  imgId,
  query,
  ratio = '3x4',
  width = 800,
  alt = '',
  className = '',
  eager = false,
  style,
}) {
  // We still compute the URL once for the initial render so a synchronous
  // resolution can win before the runtime scans the DOM. But we read it via
  // a ref so subsequent React re-renders do not bump `src` back to a stale
  // value.
  const initialSrc = getStrkImageUrl(imgId) || PLACEHOLDER

  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={initialSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
    />
  )
}
