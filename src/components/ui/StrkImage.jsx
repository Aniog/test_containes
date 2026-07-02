import React, { forwardRef } from 'react'

const svgPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const StrkImage = forwardRef(function StrkImage(
  { id, query, ratio, width, alt, className },
  ref
) {
  return (
    <img
      ref={ref}
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={svgPlaceholder}
      loading="lazy"
    />
  )
})

export function StrkBackground({
  id,
  query,
  ratio,
  width,
  className,
  children,
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}
