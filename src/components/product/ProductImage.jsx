import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductImage({ id, query, alt, ratio = '4x3', width = '700', className = '' }) {
  const imageRef = useRef(null)

  useEffect(() => {
    if (!imageRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, imageRef.current.parentElement || imageRef.current)
  }, [id, query])

  return (
    <img
      alt={alt}
      ref={imageRef}
      className={`h-full w-full object-cover ${className}`}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
    />
  )
}
