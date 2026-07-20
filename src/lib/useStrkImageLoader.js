import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

export function useStrkImageLoader(containerRef, dependencies = []) {
  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const maybeCleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof maybeCleanup === 'function' ? maybeCleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, dependencies)
}
