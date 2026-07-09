import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER_PIXEL } from '@/lib/utils.js'

export default function ProductImage({
  product,
  imgId,
  ratio = '4x3',
  width = '600',
  className = '',
  alt,
  hover = false,
}) {
  const containerRef = useRef(null)
  const nameId = `product-name-${product.id}`
  const descId = `product-desc-${product.id}`

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={`[${descId}] [${nameId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER_PIXEL}
        alt={alt || product.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {hover && (
        <img
          data-strk-img-id={`${imgId}-hover`}
          data-strk-img={`[${nameId}] worn on ear]`}
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src={PLACEHOLDER_PIXEL}
          alt={`${alt || product.name} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
      )}
      <span className="sr-only" id={nameId}>{product.name}</span>
      <span className="sr-only" id={descId}>{product.description}</span>
    </div>
  )
}
