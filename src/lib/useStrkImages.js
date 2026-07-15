import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(dependencies = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, dependencies)

  return containerRef
}

export function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId]
  const picked = entry?.picked
  const pickedResult = entry?.results?.find((result) => result.id === picked)
  return pickedResult?.url || entry?.results?.[0]?.url
}
