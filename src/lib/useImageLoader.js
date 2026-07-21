import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Scans a container element for data-strk-img / data-strk-bg tags and
 * loads the matching stock images. Returns the cleanup function.
 *
 * Pass the deps that control which tagged elements are rendered so the
 * scan re-runs when those elements change (tabs, filters, modals, etc).
 */
export function useImageLoader(deps = []) {
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
