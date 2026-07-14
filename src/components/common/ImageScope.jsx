import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ImageScope({ children, className = '', refreshKey = 'static' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [refreshKey])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
