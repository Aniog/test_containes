import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Re-scan a container for strk image slots whenever `deps` change.
// Returns a ref to attach to a stable parent that wraps all tagged elements.
export function useStrkImages(deps = []) {
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

export { strkImgConfig }
