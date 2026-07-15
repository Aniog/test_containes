import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(dependencies = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      console.info('Velmora image scan starting', { dependencies })

      try {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      } catch (error) {
        console.warn('Velmora image scan skipped', error)
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup?.()
    }
  }, dependencies)

  return containerRef
}
