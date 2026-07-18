import { useState } from 'react'
import { useStrkImages } from '@/hooks/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// Gallery uses the product's primary + secondary image plus gallery slot ids.
// Thumbnails reuse the same strk image ids so they share cached results.
export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const containerRef = useStrkImages([active])

  const slides = [
    { id: product.imgId, label: 'main', ratio: '4x5' },
    { id: product.imgId2, label: 'worn', ratio: '4x5' },
    ...product.gallery.slice(0, 2).map((g, i) => ({ id: g, label: `detail ${i + 1}`, ratio: '4x5' })),
  ]

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20">
        {slides.map((s, i) => (
          <button
            key={s.id + i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-16 h-20 md:w-full md:h-24 overflow-hidden bg-sand transition-opacity ${
              active === i ? 'opacity-100 ring-1 ring-gold' : 'opacity-60 hover:opacity-90'
            }`}
            aria-label={`View ${s.label}`}
          >
            <img
              alt=""
              data-strk-img-id={`thumb-${s.id}-${i}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${s.label}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
        {slides.map((s, i) => (
          <img
            key={s.id + 'main' + i}
            alt={product.name}
            data-strk-img-id={`gallery-main-${s.id}-${i}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] ${s.label}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src={PLACEHOLDER}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              active === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
