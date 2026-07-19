import React from "react";

/**
 * Image element that uses the strk-img runtime.
 * Falls back gracefully if no resolved asset is available.
 *
 * Props mirror data-strk-img semantics but are passed as props so the
 * component can be re-used anywhere.
 */
export default function ProductImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
  loading = "lazy",
}) {
  // 1x1 SVG placeholder so layout doesn't shift before the runtime loads.
  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={placeholder}
      loading={loading}
    />
  );
}
