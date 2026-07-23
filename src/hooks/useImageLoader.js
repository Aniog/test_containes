import { useEffect } from 'react'
import strkImgConfig from '@/strk-img-config.json'

export function useImageLoader(containerRef, deps = []) {
  useEffect(() => {
    let cleanup
    let isCancelled = false

    const frameId = window.requestAnimationFrame(async () => {
      if (!containerRef.current) {
        return
      }

      try {
        const sdk = await import('@strikingly/sdk')
        const loadImages = sdk?.ImageHelper?.loadImages

        if (!isCancelled && typeof loadImages === 'function') {
          cleanup = loadImages(strkImgConfig, containerRef.current)
        }
      } catch (error) {
        console.error('Velmora image helper error', error)
      }
    })

    return () => {
      isCancelled = true
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, deps)
}
