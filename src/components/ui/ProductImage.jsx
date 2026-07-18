import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function ProductImage({
  product,
  ratio = '1x1',
  width = 600,
  className,
  hover = false,
  hoverQuery,
  src,
  hoverSrc,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden bg-champagne/40', className)}>
      <img
        alt={product.name}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={src || PLACEHOLDER}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {hover && (
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={`${product.imgId}-hover`}
          data-strk-img={hoverQuery || `[${product.titleId}] alternate view`}
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src={hoverSrc || PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          loading="lazy"
        />
      )}
    </div>
  )
}
