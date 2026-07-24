import { useState, useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product.id])

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-brand-cream overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-img-id={`${product.imgId}-gallery-${activeIndex}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-gold/10 via-brand-cream to-brand-gold/5" />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'relative aspect-[3/4] bg-brand-cream overflow-hidden transition-all duration-300',
              activeIndex === index
                ? 'ring-1 ring-brand-gold'
                : 'ring-1 ring-transparent hover:ring-brand-divider-light'
            )}
          >
            <div
              className="absolute inset-0"
              data-strk-img-id={`${product.imgId}-thumb-${index}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] jewelry ${image.alt}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-gold/10 via-brand-cream to-brand-gold/5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
