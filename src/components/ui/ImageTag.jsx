import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const ImageTag = ({ imageId, query, ratio, width, alt, className = '' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="h-full w-full">
      <img
        alt={alt}
        className={className}
        data-strk-img-id={imageId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  )
}

export const BackgroundTag = ({ imageId, query, ratio, width, className = '' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className={className}>
      <div
        className="h-full w-full"
        data-strk-bg-id={imageId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
      />
    </div>
  )
}
