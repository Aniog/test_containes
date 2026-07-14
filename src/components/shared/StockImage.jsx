import React from 'react'

// Transparent 1x1 GIF used as a layout-safe fallback while the image helper loads.
const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export function StockImage({ query, ratio = '1x1', width = 600, imgId, alt = '', className = '', id }) {
  return (
    <img
      id={id}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={TRANSPARENT_PIXEL}
      loading="lazy"
    />
  )
}

export function StockBackground({ query, ratio = '16x9', width = 1600, bgId, className = '', children }) {
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}
