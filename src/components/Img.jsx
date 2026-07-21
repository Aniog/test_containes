import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Page-level image loader: scans its subtree for data-strk-img / data-strk-bg
// elements and asks the stock-image system to resolve them. Re-runs whenever
// `deps` change (e.g. after async data renders new tagged elements).
export function ImageRoot({ children, className, deps = [] }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export const STRK_PLACEHOLDER = PLACEHOLDER
