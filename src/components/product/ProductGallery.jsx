import React from 'react'
import { IMAGE_PLACEHOLDER } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = React.useState(product.gallery[0])
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    setActiveImage(product.gallery[0])
  }, [product])

  useStrkImages(containerRef, [product.id, activeImage.id])

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[5.5rem_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image) => {
          const thumbTitleId = `thumb-${product.id}-${image.id}-title`
          const isActive = activeImage.id === image.id

          return (
            <button
              key={image.id}
              type="button"
              className={`overflow-hidden rounded-[1.25rem] border bg-stone-50 transition ${
                isActive
                  ? 'border-stone-900 shadow-sm'
                  : 'border-stone-200 hover:border-stone-500'
              }`}
              onClick={() => setActiveImage(image)}
            >
              <img
                alt={`${product.name} ${image.title}`}
                className="h-20 w-20 object-cover"
                data-strk-img-id={`thumb-${product.id}-${image.id}`}
                data-strk-img={`[${thumbTitleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="240"
                src={IMAGE_PLACEHOLDER}
              />
              <span id={thumbTitleId} aria-hidden="true" className="sr-only">
                {image.prompt}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-[0_24px_80px_-44px_rgba(28,25,23,0.55)] lg:order-2">
        <span id={`product-${product.id}-active-title`} aria-hidden="true" className="sr-only">
          {activeImage.prompt}
        </span>
        <img
          alt={`${product.name} main image`}
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id={`product-main-${product.id}-${activeImage.id}`}
          data-strk-img={`[product-${product.id}-active-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src={IMAGE_PLACEHOLDER}
        />
      </div>
    </div>
  )
}
