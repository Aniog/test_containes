import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Scans a container for data-strk-img / data-strk-bg elements and loads images.
// Re-runs whenever `deps` change so newly mounted images (tabs, filters, modals)
// are populated. Returns the cleanup from ImageHelper.loadImages.
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
