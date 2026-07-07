import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductImage({
  product,
  variant = 'primary',
  ratio = '4x3',
  width = 600,
  className = '',
  alt,
}) {
  const containerRef = useRef(null)
  const imgId = variant === 'hover' ? product.hoverImgId : product.imgId

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        alt={alt || product.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
