import { useState } from 'react'
import ProductImage from '@/components/ui/ProductImage'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { imgId: `velmora-product-${product.id}-detail-1`, ratio: '4x5', width: 900 },
    { imgId: `velmora-product-${product.id}-detail-2`, ratio: '4x5', width: 900 },
    { imgId: `velmora-product-${product.id}-detail-3`, ratio: '4x5', width: 900 },
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] bg-warm-gray overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img.imgId}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <ProductImage
              product={product}
              imgId={img.imgId}
              ratio={img.ratio}
              width={img.width}
              alt={`${product.name} view ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
            className={`relative w-20 h-24 md:w-24 md:h-28 bg-warm-gray overflow-hidden border transition-colors ${
              activeIndex === index
                ? 'border-espresso'
                : 'border-transparent hover:border-taupe'
            }`}
          >
            <ProductImage
              product={product}
              imgId={img.imgId}
              ratio="4x5"
              width={200}
              alt={`${product.name} thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
