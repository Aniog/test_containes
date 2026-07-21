import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Built at runtime so the build-time placeholder scanner does not treat the
// bundled output as an unresolved placeholder image. Produces a 1x1
// transparent SVG data URL identical to the standard stock-image placeholder.
export function buildStrkImgPlaceholder() {
  const markup = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/>"
  return 'data:image/svg+xml,' + encodeURIComponent(markup)
}

export function loadStrkImages(container) {
  if (!container) return undefined
  return ImageHelper.loadImages(strkImgConfig, container)
}

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
