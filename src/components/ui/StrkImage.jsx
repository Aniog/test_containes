import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// A single <img> backed by the strk-img stock system.
// `imgId` is the unique data-strk-img-id; `query` references DOM text ids.
export function StrkImage({
  imgId,
  query,
  ratio = '4x5',
  width = 800,
  alt = '',
  className = '',
  titleId,
  descId,
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      data-title-id={titleId}
      data-desc-id={descId}
    />
  )
}

// Wraps children and runs ImageHelper.loadImages on the subtree.
// Re-runs whenever `deps` change (e.g. active tab / filter / route).
export function StrkImageScope({ children, deps = [], as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
