import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '../strk-img-config.json'

export const useStrkImages = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return containerRef
}
