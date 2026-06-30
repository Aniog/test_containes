import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * useStrkImages — scans a container for data-strk-img / data-strk-bg elements
 * and loads stock images. Re-runs whenever `deps` change so dynamically
 * rendered images (tabs, filters, route changes) are picked up.
 *
 * Returns a ref to attach to a stable parent container that wraps all
 * tagged image elements.
 */
export function useStrkImages(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}

export { strkImgConfig }
