import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product.slug])

  return (
    <div ref={containerRef} className="space-y-4">
      <p id="product-query-generic" className="sr-only">
        Elegant gold demi-fine jewelry on a warm neutral background
      </p>
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone">
        <img
          data-strk-img-id="product-gallery-main"
          data-strk-img="[product-query-generic]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square overflow-hidden bg-velmora-stone ${
              activeIndex === index ? 'ring-2 ring-velmora-gold' : ''
            }`}
          >
            <img
              data-strk-img-id={`product-gallery-thumb-${index}`}
              data-strk-img="[product-query-generic]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
