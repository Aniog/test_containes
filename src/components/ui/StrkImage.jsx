import React from "react";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Wrapper around <img> that injects the data-strk-img attributes for our
 * stock-image system. All Velmora product/editorial imagery flows through here.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "3x4",
  width = 800,
  alt = "",
  className = "",
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
      loading="lazy"
      {...rest}
    />
  );
}
