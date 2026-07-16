import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useImageLoader(containerRef, dependencies = []) {
  useEffect(() => {
    let cleanup
    const frame = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, dependencies)
}
