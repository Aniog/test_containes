import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * useStrkImages — scans a container for data-strk-img / data-strk-bg elements
 * and loads stock images. Re-runs whenever `deps` change so dynamically
 * rendered images (tabs, filters, route changes) are populated.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    }, 50)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

/**
 * StrkImg — content image using the stock-image system.
 * Props:
 *  - imgId: unique data-strk-img-id
 *  - query: interpolation string e.g. "[title-id] [desc-id]"
 *  - ratio: 3x2 | 16x9 | 4x3 | 1x1 | 3x4 | 9x16 | 2x3
 *  - width: approximate pixel width
 *  - alt, className
 */
export function StrkImg({ imgId, query, ratio = '4x3', width = 600, alt = '', className }) {
  return (
    <img
      className={className}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  )
}

/**
 * StrkBg — background image using the stock-image system.
 */
export function StrkBg({ bgId, query, ratio = '16x9', width = 1600, className, children, ...rest }) {
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      {...rest}
    >
      {children}
    </div>
  )
}
