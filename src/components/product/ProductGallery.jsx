import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { id: `main-${product.id}`, query: `[gallery-${product.id}-title] [gallery-${product.id}-desc]` },
    { id: `alt1-${product.id}`, query: `[gallery-${product.id}-desc]` },
    { id: `alt2-${product.id}`, query: `[gallery-${product.id}-title]` },
    { id: `alt3-${product.id}`, query: `[gallery-${product.id}-title]` },
  ]

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-muted lg:flex-1">
        <img
          data-strk-img={images[activeIndex].query}
          data-strk-img-id={images[activeIndex].id}
          data-strk-img-ratio="1x1"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto lg:w-24 lg:flex-col">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border bg-muted lg:h-24 lg:w-24',
              activeIndex === index ? 'border-accent' : 'border-border'
            )}
            aria-label={`View image ${index + 1}`}
          >
            <img
              data-strk-img={img.query}
              data-strk-img-id={`thumb-${img.id}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
