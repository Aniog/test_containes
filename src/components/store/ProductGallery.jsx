import { useMemo, useRef, useState } from 'react'
import { StrkImage } from '../ui/StockImage'
import { useStrkImages } from '../../lib/useStrkImages'
import { cn } from '../../lib/utils'

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const promptIds = useMemo(
    () =>
      product.galleryPrompts.map(
        (_, index) => `product-gallery-${product.slug}-prompt-${index}`,
      ),
    [product.galleryPrompts, product.slug],
  )

  const titleId = `product-gallery-${product.slug}-title`
  const categoryId = `product-gallery-${product.slug}-category`

  useStrkImages(containerRef, [product.slug, selectedIndex])

  return (
    <div ref={containerRef} className="grid gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {promptIds.map((promptId, index) => (
          <button
            key={promptId}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'relative h-24 w-20 shrink-0 overflow-hidden rounded-[20px] border bg-mist transition',
              selectedIndex === index
                ? 'border-champagne shadow-card'
                : 'border-parchment hover:border-champagne/60',
            )}
          >
            <StrkImage
              id={`product-thumb-${product.slug}-${index}-t${index}`}
              alt={`${product.name} thumbnail ${index + 1}`}
              queryIds={[promptId, categoryId, titleId]}
              ratio="3x4"
              width="240"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[34px] bg-mist shadow-card md:order-2">
        <div className="aspect-[4/5]">
          <StrkImage
            id={`product-main-${product.slug}-${selectedIndex}-m1`}
            alt={product.name}
            queryIds={[promptIds[selectedIndex], categoryId, titleId]}
            ratio="4x3"
            width="1400"
          />
        </div>
      </div>

      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={categoryId} className="sr-only">
        {product.category}
      </span>
      {product.galleryPrompts.map((prompt, index) => (
        <span key={promptIds[index]} id={promptIds[index]} className="sr-only">
          {prompt}
        </span>
      ))}
    </div>
  )
}
