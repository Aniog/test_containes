import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(containerRef, dependencies = []) {
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) {
      return undefined
    }

    let dispose = () => {}
    const frame = window.requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      dispose = typeof cleanup === 'function' ? cleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frame)
      dispose()
    }
  }, dependencies)
}
