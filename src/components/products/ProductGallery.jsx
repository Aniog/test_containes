import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product.id])

  return (
    <div ref={containerRef} className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-all duration-300 ${
              activeIndex === index
                ? 'border-gold'
                : 'border-transparent hover:border-charcoal-200'
            }`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover bg-cream-200"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${product.id}] ${product.imgQuery} thumbnail ${index + 1}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="100"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative overflow-hidden bg-cream-200 aspect-[3/4] lg:aspect-[4/5]">
        {product.images.map((image, index) => (
          <img
            key={image.id}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} main ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            data-strk-img-id={`${image.id}-main`}
            data-strk-img={`[${product.id}] ${product.imgQuery} main product shot ${index + 1}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
          />
        ))}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-charcoal text-cream-100 caption px-4 py-2 text-[10px]">
              {product.badge}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
