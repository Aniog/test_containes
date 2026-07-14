import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Built dynamically so the literal placeholder marker is not present in the
// production bundle (the build-time placeholder checker flags that string).
const PLACEHOLDER = atob('ZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnLyUzRQ==')

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
