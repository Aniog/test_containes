import React from "react";

/**
 * A lightweight <img> wrapper that uses the StrkImg data attributes.
 * `data-strk-img` search strings should reference other text element ids
 * (e.g. "[product-title] [section-eyebrow]") — never hard-coded copy.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "1x1",
  width = 800,
  alt = "",
  className = "",
  loading = "lazy",
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}
