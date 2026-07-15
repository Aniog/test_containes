import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const useStrkImages = (dependencies = []) => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, dependencies)

  return containerRef
}

export default useStrkImages
