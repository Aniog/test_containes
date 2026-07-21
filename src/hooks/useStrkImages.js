import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * useStrkImages — scans a container for data-strk-img / data-strk-bg elements
 * and triggers the stock image loader. Re-runs whenever `deps` change so that
 * newly mounted image nodes (tabs, filters, route changes) are populated.
 *
 * Returns a ref to attach to a stable parent container that wraps all tagged
 * image/background elements.
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
