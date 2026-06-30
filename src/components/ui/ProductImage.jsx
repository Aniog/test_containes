import React from "react"

// Wrapper around <img> that injects the strk-img data attributes.
// The `query` prop must be a STRING containing bracketed id references
// like "[vivid-aura-name] [vivid-aura-desc]". Keeping it a plain string
// (instead of an array) lets the strk-img plugin statically resolve the
// value from the call site and translate the bracketed ids against the
// rendered DOM ids.
export default function ProductImage({
  imgId,
  ratio = "1x1",
  width = 800,
  query = "",
  alt = "",
  className = "",
  priority = false,
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      loading={priority ? "eager" : "lazy"}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  )
}
