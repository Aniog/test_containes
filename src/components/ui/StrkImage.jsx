// Placeholder SVG used before the stock-image system swaps in real photos.
export const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

// A content <img> wired to the stock-image system.
// queryRefs: array of element IDs (strings) to interpolate, e.g. ['title-x', 'desc-x']
// or a literal query string. We build "[id1] [id2]" form.
export function buildQuery(queryRefs) {
  if (!queryRefs) return ''
  if (typeof queryRefs === 'string') return queryRefs
  return queryRefs.map((id) => `[${id}]`).join(' ')
}

export default function StrkImage({
  imgId,
  queryRefs,
  ratio = '4x3',
  width = 600,
  alt = '',
  className,
  ...rest
}) {
  return (
    <img
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={buildQuery(queryRefs)}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER_SRC}
      className={className}
      {...rest}
    />
  )
}
