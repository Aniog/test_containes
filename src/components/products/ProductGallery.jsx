import { useState } from 'react'
import { cn } from '@/lib/utils'
import { getStrkImageSrc } from '@/lib/strkImage'
import { useStrkImages } from '@/lib/useStrkImages'

function ProductGallery({ product, containerRef }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = product.images[activeIndex] || product.images[0]

  useStrkImages(containerRef, [product.slug, activeIndex])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] bg-stone-100">
        <img
          src={getStrkImageSrc(`pdp-main-${product.slug}-${activeImage.id}`)}
          alt={activeImage.alt}
          className="h-[540px] w-full object-cover"
          data-strk-img-id={`pdp-main-${product.slug}-${activeImage.id}`}
          data-strk-img={`[pdp-main-${product.slug}-${activeImage.id}-desc] [pdp-main-${product.slug}-${activeImage.id}-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
        />
        <span id={`pdp-main-${product.slug}-${activeImage.id}-title`} className="sr-only">
          {product.name}
        </span>
        <span id={`pdp-main-${product.slug}-${activeImage.id}-desc`} className="sr-only">
          {activeImage.note}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              'overflow-hidden rounded-[1.5rem] border bg-stone-100 transition',
              activeIndex === index ? 'border-stone-950' : 'border-stone-200 hover:border-stone-400',
            )}
            aria-label={`View ${image.label}`}
          >
            <img
              src={getStrkImageSrc(`pdp-thumb-${product.slug}-${image.id}`)}
              alt={image.alt}
              className="h-28 w-full object-cover"
              data-strk-img-id={`pdp-thumb-${product.slug}-${image.id}`}
              data-strk-img={`[pdp-thumb-${product.slug}-${image.id}-desc] [pdp-thumb-${product.slug}-${image.id}-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
            />
            <span id={`pdp-thumb-${product.slug}-${image.id}-title`} className="sr-only">
              {product.name}
            </span>
            <span id={`pdp-thumb-${product.slug}-${image.id}-desc`} className="sr-only">
              {image.note}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
