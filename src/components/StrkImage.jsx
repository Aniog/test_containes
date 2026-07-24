import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Kept as a string literal (NOT a const identifier) in the `src` attribute below
// so the build-time image plugin recognises it as a placeholder and patches it
// with the resolved CDN URL. Using `src={SOME_CONST}` would leave the placeholder
// in the production build.
const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

/**
 * Renders a strk-img tagged <img> with a placeholder src and self-loads
 * the real image via ImageHelper on mount.
 * Props:
 *  - imgId: unique data-strk-img-id
 *  - query: interpolation string e.g. "[title-id] [desc-id]"
 *  - ratio: one of 3x2,16x9,4x3,1x1,3x4,9x16,2x3
 *  - width: approximate pixel width
 *  - alt, className
 */
export default function StrkImage({
  imgId,
  query,
  ratio = '4x5',
  width = 600,
  alt = '',
  className,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [imgId, query])

  return (
    <img
      ref={ref}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
    />
  )
}
