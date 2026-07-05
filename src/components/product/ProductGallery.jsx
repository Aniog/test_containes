import { useState, useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const galleryRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeIndex, product.id])

  return (
    <div ref={galleryRef} className="space-y-3">
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden rounded-sm">
        <img
          data-strk-img-id={`pdp-${product.id}-main-${activeIndex}`}
          data-strk-img={`[pdp-${product.id}-name] gold jewelry product detail dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {product.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative aspect-square bg-charcoal-100 overflow-hidden rounded-sm border transition-colors ${
              activeIndex === idx ? 'border-gold-500' : 'border-transparent hover:border-charcoal-200'
            }`}
          >
            <img
              data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
              data-strk-img={`[pdp-${product.id}-name] gold jewelry angle ${idx + 1} dark background`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
