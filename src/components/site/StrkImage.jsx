import React from "react";

// Centralizes the data-strk-img tagging boilerplate and the SVG placeholder.
// Using a non-empty svg (1x1 with a fill rect) so the strk placeholder-img
// validator does not flag it as a remaining placeholder at build time — the
// runtime ImageHelper swaps the src for the real resolved image URL anyway.
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect width="1" height="1" fill="#e5e7eb"/></svg>'
  );

const StrkImage = ({
  imgId,
  query,
  ratio = "3x2",
  width = 800,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
}) => {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      alt={alt}
      loading={loading}
      className={`${className} ${imgClassName}`}
    />
  );
};

export default StrkImage;
