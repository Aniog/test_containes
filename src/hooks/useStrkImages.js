import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Loads all data-strk-img / data-strk-bg elements inside the container.
// Re-runs whenever any of the dependency values change (so newly mounted
// tagged elements get scanned). Returns a ref to attach to a stable parent.
export function useStrkImages(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
