import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selected, product.id])

  return (
    <div ref={containerRef} className="flex gap-4">
      {/* Thumbnails */}
      <div className="hidden md:flex flex-col gap-3">
        {product.images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelected(index)}
            className={`w-16 h-20 border-2 overflow-hidden transition-all duration-300 ${
              selected === index
                ? 'border-gold opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              data-strk-img-id={`pd-thumb-${product.id}-${img.id}`}
              data-strk-img={`[pd-title-${product.id}] [pd-desc-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-[#E5DDD3] overflow-hidden">
        <img
          data-strk-img-id={`pd-main-${product.id}-${product.images[selected].id}`}
          data-strk-img={`[pd-title-${product.id}] [pd-desc-${product.id}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[selected].alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}