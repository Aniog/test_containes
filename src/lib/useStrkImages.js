import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Hook that loads strk stock images inside a container whenever the
 * controlling state changes. Returns a ref to attach to a stable parent
 * element that wraps all data-strk-img / data-strk-bg elements.
 */
export function useStrkImages(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
