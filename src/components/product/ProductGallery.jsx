import { useState } from 'react'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product }) {
  const images = [
    {
      id: product.imageId,
      alt: product.imageAlt,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: product.hoverImageId,
      alt: `${product.name} detail view`,
      query: `[${product.titleId}] [${product.descId}] [product-gallery-title]`,
    },
    {
      id: `${product.id}-lifestyle-v5r3c7`,
      alt: `${product.name} worn on model`,
      query: `[product-short-description] [product-title]`,
    },
  ]

  const [activeImage, setActiveImage] = useState(images[0])
  const containerRef = useStrkImages([activeImage.id])

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[112px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn(
              'overflow-hidden rounded-[1.5rem] border transition',
              activeImage.id === image.id
                ? 'border-velmora-ink shadow-soft'
                : 'border-velmora-sand/50 opacity-80 hover:opacity-100',
            )}
          >
            <img
              alt={image.alt}
              className="h-24 w-24 object-cover sm:h-28 sm:w-28"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={image.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-white shadow-velvet lg:order-2">
        <div className="aspect-[4/5]">
          <img
            alt={activeImage.alt}
            className="h-full w-full object-cover"
            data-strk-img-id={`${activeImage.id}-active`}
            data-strk-img={activeImage.query}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
      <h2 id="product-gallery-title" className="sr-only">
        Product gallery
      </h2>
    </div>
  )
}
