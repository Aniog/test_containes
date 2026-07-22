import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'

import strkImgConfig from '@/strk-img-config.json'

const noop = () => {}

const useLoadImages = (containerRef, dependencies = []) => {
  useEffect(() => {
    let cleanup = noop

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || noop
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, dependencies)
}

export default useLoadImages
