import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(helperOrContainerRef, maybeContainerRef = null, deps = []) {
  const helper = maybeContainerRef ? helperOrContainerRef : ImageHelper
  const containerRef = maybeContainerRef || helperOrContainerRef

  useEffect(() => {
    let cleanup

    const frameId = window.requestAnimationFrame(() => {
      cleanup = helper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, deps)
}
