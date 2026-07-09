import { useState } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useImageLoader(`gallery-${product.slug}-${activeIndex}`)

  return (
    <div ref={containerRef}>
      <div className="grid gap-4 lg:grid-cols-[88px_minmax(0,1fr)]">
        <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
          {product.galleryNotes.map((note, index) => (
            <button
              key={note}
              type="button"
              className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-[1.2rem] border transition ${
                index === activeIndex
                  ? 'border-velmora-gold'
                  : 'border-velmora-line hover:border-velmora-gold/50'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
                data-strk-img-id={`product-thumb-${product.slug}-${index}`}
                data-strk-img={`[product-gallery-note-${product.slug}-${index}] [product-gallery-title-${product.slug}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="/vite.svg"
              />
              <span
                id={`product-gallery-note-${product.slug}-${index}`}
                className="sr-only"
                aria-hidden="true"
              >
                {note}
              </span>
            </button>
          ))}
        </div>

        <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-pearl shadow-card lg:order-2">
          <img
            alt={product.name}
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id={`product-gallery-main-${product.slug}-${activeIndex}`}
            data-strk-img={`[product-gallery-note-${product.slug}-${activeIndex}] [product-gallery-title-${product.slug}] [product-gallery-desc-${product.slug}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="/vite.svg"
          />
        </div>
      </div>
      <p id={`product-gallery-title-${product.slug}`} className="sr-only" aria-hidden="true">
        {product.name}
      </p>
      <p id={`product-gallery-desc-${product.slug}`} className="sr-only" aria-hidden="true">
        {product.shortDescription}
      </p>
    </div>
  )
}

export default ProductGallery
