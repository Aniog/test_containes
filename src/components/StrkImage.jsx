import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = '800',
  alt = '',
  className = '',
}) {
  const imgRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const el = imgRef.current
      const container = el?.closest('main') || el?.parentElement
      if (container) {
        ImageHelper.loadImages(strkImgConfig, container)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [imgId, query])

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      loading="lazy"
    />
  )
}
