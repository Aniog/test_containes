import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const useStrkImages = (containerRef, dependencies = []) => {
  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const imageCleanup = ImageHelper.loadImages(
        strkImgConfig,
        containerRef.current,
      )

      if (typeof imageCleanup === 'function') {
        cleanup = imageCleanup
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, dependencies)
}
