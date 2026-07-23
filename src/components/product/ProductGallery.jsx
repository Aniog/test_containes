import { useState } from 'react'
import { cn } from '@/lib/utils'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)

  const slides = product.gallery || []

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0">
        {slides.map((g, i) => (
          <button
            key={g.imgId}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              'relative w-16 h-20 md:w-full md:h-24 overflow-hidden bg-sand transition-all',
              active === i
                ? 'ring-1 ring-gold ring-offset-2 ring-offset-cream'
                : 'opacity-60 hover:opacity-100',
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt={`${product.name} ${i + 1}`}
              src={resolveStrkImageUrl(`thumb-${g.imgId}`)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
        {slides.map((g, i) => (
          <img
            key={g.imgId}
            alt={product.name}
            src={resolveStrkImageUrl(`main-${g.imgId}`)}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              active === i ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
      </div>
    </div>
  )
}
