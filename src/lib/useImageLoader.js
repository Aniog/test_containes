import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useImageLoader(containerRef, deps = []) {
  useEffect(() => {
    let dispose = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      if (typeof cleanup === 'function') {
        dispose = cleanup
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      dispose()
    }
  }, deps)
}
