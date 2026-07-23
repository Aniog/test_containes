import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const useLoadStrkImages = (dependencies = []) => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, dependencies)

  return containerRef
}

export default useLoadStrkImages
