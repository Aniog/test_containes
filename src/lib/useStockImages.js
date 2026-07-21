import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Wraps ImageHelper.loadImages for use at the page level.
// Pass a ref to a stable container that wraps all stock images, and the
// runtime will scan it once on mount and again whenever `deps` change.
export default function useStockImages(containerRef, deps = []) {
  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frame = window.requestAnimationFrame(() => {
      try {
        return ImageHelper.loadImages(strkImgConfig, node)
      } catch {
        /* noop */
      }
    })
    return () => window.cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
