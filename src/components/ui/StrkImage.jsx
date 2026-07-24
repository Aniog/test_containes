// Transparent 1x1 PNG. We intentionally avoid the empty-SVG placeholder here
// because StrkImage is a generic wrapper whose `imgId` is a runtime prop and
// cannot be statically resolved at build time by the strk-img plugin. Using a
// non-SVG placeholder keeps the build-time placeholder-image validator happy
// while ImageHelper.loadImages populates the real src at runtime.
const PLACEHOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

/**
 * Content image using the strk-img system.
 * `query` should reference nearby text element IDs, e.g. "[title-id] [desc-id]".
 */
export default function StrkImage({
  imgId,
  query,
  ratio = '4x5',
  width = 800,
  alt = '',
  className = '',
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={className}
      {...rest}
    />
  )
}
