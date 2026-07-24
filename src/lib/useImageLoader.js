import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Scans a container element for `data-strk-img` / `data-strk-bg` tags and
 * triggers the stock image loader. Returns the cleanup function.
 *
 * Pass the dependency values that control which tagged images are rendered
 * (e.g. active tab, selected product, page) so the scan reruns when the DOM
 * changes.
 */
export function useImageLoader(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
