import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useImageLoader(dependencies = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frame = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      cleanup()
    }
  }, dependencies)

  return containerRef
}
