export const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function StrkImage({ imgId, query, ratio = '4x5', width = 800, alt = '', className = '' }) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={SVG_PLACEHOLDER}
      alt={alt}
      loading="lazy"
      className={className}
    />
  )
}
