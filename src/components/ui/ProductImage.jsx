// Placeholder SVG used before the stock image system populates the <img>.
export const PLACEHOLDER_SVG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

/**
 * Product/content image wired to the strk stock-image system.
 * `query` should reference DOM element IDs, e.g. "[prod-title] [prod-desc]".
 */
export default function ProductImage({
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
      data-strk-img-width={width}
      src={PLACEHOLDER_SVG}
      alt={alt}
      className={className}
      loading="lazy"
      {...rest}
    />
  )
}
