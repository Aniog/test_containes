import { useState, useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (imgLoaded) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    setImgLoaded(true)
    return cleanup
  }, [imgLoaded, product.id])

  return (
    <div ref={containerRef}>
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        <img
          alt={`${product.name} view ${active + 1}`}
          data-strk-img-id={`pdp-${product.id}-${active}`}
          data-strk-img={`[pdp-name-${product.id}] gold demi-fine jewelry view ${active + 1}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover animate-fadeIn"
        />
        <span className="hidden" id={`pdp-name-${product.id}`}>{product.name}</span>

        {/* Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur-sm shadow flex items-center justify-center hover:bg-cream-50 transition-colors"
              onClick={() => setActive((active - 1 + product.images.length) % product.images.length)}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-velvet-800" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur-sm shadow flex items-center justify-center hover:bg-cream-50 transition-colors"
              onClick={() => setActive((active + 1) % product.images.length)}
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-velvet-800" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-2">
          {product.images.map((_, i) => (
            <button
              key={i}
              className={`w-16 h-16 bg-velvet-100 overflow-hidden border-2 transition-colors ${
                i === active ? 'border-velvet-800' : 'border-transparent hover:border-velvet-300'
              }`}
              onClick={() => setActive(i)}
            >
              <img
                alt={`${product.name} thumbnail ${i + 1}`}
                data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                data-strk-img={`[pdp-name-${product.id}] jewelry thumbnail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="128"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
