import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const images = [
    { variant: 'primary', imgId: product.imgId },
    { variant: 'hover', imgId: product.hoverImgId },
    { variant: 'primary', imgId: `${product.imgId}-alt` },
    { variant: 'hover', imgId: `${product.hoverImgId}-alt` },
  ]

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="relative aspect-[4/5] bg-champagne/30 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={`${image.imgId}-${index}`}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <img
              data-strk-img-id={image.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width={900}
              src={PLACEHOLDER}
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={`thumb-${image.imgId}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square bg-champagne/30 overflow-hidden border transition-colors duration-300 ${
              activeIndex === index
                ? 'border-gold'
                : 'border-transparent hover:border-gold/50'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              data-strk-img-id={`thumb-${image.imgId}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width={200}
              src={PLACEHOLDER}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
