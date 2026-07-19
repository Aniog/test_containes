import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Hook to load stock images via the Strikingly ImageHelper.
 * Attach the returned ref to a container element that wraps all
 * data-strk-img and data-strk-bg elements you want to populate.
 *
 * @param deps - Additional dependencies that should trigger a re-scan
 *               (e.g. state values that control which images are rendered)
 */
export function useImageLoader(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const frameId = window.requestAnimationFrame(() => {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, deps)

  return containerRef
}
