import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Hook that scans a container for data-strk-img / data-strk-bg elements
 * and loads their stock images. Returns a ref to attach to a stable parent.
 * Re-runs whenever any of the dependency values change (e.g. active tab/filter).
 */
export function useImageLoader(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
