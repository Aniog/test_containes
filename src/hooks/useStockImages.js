import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const useStockImages = (containerRef, dependencies = []) => {
  useEffect(() => {
    let dispose = () => {}

    const frame = window.requestAnimationFrame(() => {
      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      dispose()
    }
  }, dependencies)
}
