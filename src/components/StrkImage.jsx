import React from 'react'

export const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

// Convenience wrapper for a content image using the strk-img system.
// `query` should reference element IDs, e.g. "[prod-x-title] [prod-x-desc]".
export default function StrkImage({
  imgId,
  query,
  ratio = '4x5',
  width = 600,
  alt = '',
  className = '',
  imgClassName = '',
  ...rest
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} {...rest}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
