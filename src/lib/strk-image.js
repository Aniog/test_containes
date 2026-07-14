import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Scans a container for strk-img / strk-bg tags and loads stock images.
 * Returns the cleanup function. Re-runs when `deps` change.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

/**
 * Returns the resolved image URL for a given strk-img-id from the config.
 * Useful for components (like the cart drawer) where ImageHelper may skip
 * already-processed IDs.
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig?.[imgId]
  if (!entry) return PLACEHOLDER
  const url = entry.results?.[0]?.url
  return url || PLACEHOLDER
}

export { PLACEHOLDER }
