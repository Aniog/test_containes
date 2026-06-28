import { useEffect, useRef, useState } from 'react'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [activeImage, setActiveImage] = useState(product.gallery[0]?.id)
  const activeSlotId = `product-detail-${product.id}-${activeImage}`

  useEffect(() => {
    setActiveImage(product.gallery[0]?.id)
  }, [product.id, product.gallery])

  useStrkImages(containerRef, [activeSlotId, product.id])

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
        <img
          alt={product.alt}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={activeSlotId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src={imagePlaceholder}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {product.gallery.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveImage(image.id)}
            className={cn(
              'overflow-hidden rounded-[1.4rem] border bg-stone-100 text-left transition',
              activeImage === image.id
                ? 'border-stone-950 shadow-[0_10px_30px_rgba(28,25,23,0.1)]'
                : 'border-stone-200 hover:border-stone-400',
            )}
          >
            <img
              alt={image.label}
              className="aspect-square w-full object-cover"
              data-strk-img-id={`product-detail-${product.id}-${image.id}-thumb`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src={imagePlaceholder}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
