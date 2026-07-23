import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const useStrkImages = (containerRef, dependencies = []) => {
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, dependencies)
}

export default useStrkImages
