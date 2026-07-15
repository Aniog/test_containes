import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef?.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [containerRef, ...deps])
}
