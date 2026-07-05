const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

// A content <img> wired to the strk-img stock image system.
// `query` should reference nearby text element IDs, e.g. "[title-id] [desc-id]".
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
    />
  )
}

// A background div wired to the strk-bg stock image system.
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  children,
  ...rest
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      {...rest}
    >
      {children}
    </div>
  )
}
