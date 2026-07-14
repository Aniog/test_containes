const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// A content image wired to the strk-img tagging system.
// `imgId` must be globally unique. `query` references nearby text element IDs.
export default function StrkImage({
  imgId,
  query,
  ratio = '4x5',
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
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      alt={alt}
      className={className}
      loading="lazy"
      {...rest}
    />
  )
}
