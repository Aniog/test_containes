import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const fallbackImageUrl = Object.values(strkImgConfig).find((entry) => entry?.results?.[0]?.url)?.results?.[0]?.url || ''

export const getStrikinglyImageUrl = (imageId) =>
  strkImgConfig?.[imageId]?.results?.[0]?.url || fallbackImageUrl

export default function ImageLoadScope({ children, className = '', dependencyKey = 'static', as: Tag = 'div' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [dependencyKey])

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}
