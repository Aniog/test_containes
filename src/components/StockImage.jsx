// Stock image component used throughout the site. Uses the strk-img
// runtime system via data-strk-img-* attributes. The actual src
// resolution happens at runtime through ImageHelper.loadImages.
//
// `fallbackSrc` lets the caller pass a known-good URL that the browser
// displays immediately. The runtime will replace it with the resolved
// CDN URL once ImageHelper has indexed the matching data-strk-img-id.
export default function StockImage({
  id,
  query,
  ratio = "4x5",
  width = 900,
  alt = "",
  className = "",
  imgClassName = "w-full h-full object-cover",
  eager = false,
  fallbackSrc,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        alt={alt}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        data-strk-img-id={id}
        loading={eager ? "eager" : "lazy"}
        src={
          fallbackSrc ||
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        }
        className={`img-placeholder ${imgClassName}`}
      />
    </div>
  )
}
