import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ImageLoader({ children, className = '', refreshKey = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [refreshKey])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
