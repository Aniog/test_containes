import { useState } from 'react'
import { cn } from '@/lib/utils'
import { getStrkImageUrl } from '@/lib/strk-images'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = product.gallery[activeIndex]

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2.25rem] border border-velmora-line bg-velmora-ivory shadow-velmora-lg">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          src={getStrkImageUrl(activeImage.slotId)}
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {product.gallery.map((image, index) => (
          <button
            key={image.slotId}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              'overflow-hidden rounded-[1.25rem] border bg-velmora-ivory shadow-velmora-sm transition',
              activeIndex === index
                ? 'border-velmora-bronze'
                : 'border-velmora-line hover:border-velmora-bronze/60',
            )}
          >
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="aspect-square w-full object-cover"
              src={getStrkImageUrl(image.slotId)}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
