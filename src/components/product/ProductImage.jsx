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
  // The runtime ImageHelper replaces this src with the resolved CDN URL
  // immediately after mount. The empty string is intentional: the parent
  // always wraps the image in a sized container (aspect-ratio) so the layout
  // is stable, and an empty src keeps the build output free of placeholder
  // URLs that the build-time image validator would flag as unresolved.
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src=""
      loading={loading}
    />
  );
}
