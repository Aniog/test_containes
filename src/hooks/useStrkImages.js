import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(containerRef, dependencies = []) {
  useEffect(() => {
    let disposeImages = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef?.current) {
        return
      }

      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      disposeImages = typeof cleanup === 'function' ? cleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disposeImages()
    }
  }, [containerRef, ...dependencies])
}
