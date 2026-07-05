// Standardized stock-image element wrappers.
// These render placeholder markup that the strk-img plugin + ImageHelper
// populate at runtime. Always include a real `alt`.

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export function StrkImg({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className,
  imgClassName,
  ...rest
}) {
  return (
    <div className={className} {...rest}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        className={imgClassName}
      />
    </div>
  )
}

export function StrkBg({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  ...rest
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}
