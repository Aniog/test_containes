import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Scans a container for data-strk-img / data-strk-bg elements and loads stock images.
// Re-runs whenever `deps` change so conditionally rendered images (tabs, filters,
// modals, route changes) are populated after the new DOM commits.
export function useImageScan(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

export { strkImgConfig }
