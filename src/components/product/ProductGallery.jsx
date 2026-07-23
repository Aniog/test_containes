import React, { useMemo, useRef, useState } from 'react'
import { useStockImages } from '@/lib/useStockImages'

const ProductGallery = ({ product }) => {
  const imagePromptId = `product-${product.slug}-gallery-prompt`
  const images = useMemo(
    () => [
      { id: product.imageIds.primary, ratio: '4x3', width: '1000' },
      { id: product.imageIds.secondary, ratio: '4x3', width: '1000' },
      { id: product.imageIds.detail, ratio: '1x1', width: '800' },
      { id: product.imageIds.lifestyle, ratio: '4x3', width: '1000' },
    ],
    [product.imageIds.detail, product.imageIds.lifestyle, product.imageIds.primary, product.imageIds.secondary],
  )
  const [activeImage, setActiveImage] = useState(images[0])
  const containerRef = useRef(null)

  useStockImages(containerRef, [activeImage.id])

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[112px_1fr]">
      <p id={imagePromptId} className="sr-only">
        {product.galleryImagePrompt ?? product.imagePrompt ?? `Editorial jewelry photography of ${product.imageSubject} styled on a model or neutral luxury backdrop`}
      </p>
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-[1.5rem] border bg-white/70 transition-all duration-300 ${activeImage.id === image.id ? 'border-velmora-accent shadow-soft' : 'border-velmora-line hover:border-velmora-gold'}`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              aria-hidden="true"
              className="h-24 w-20 object-cover sm:h-28 sm:w-24"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${imagePromptId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="280"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2.25rem] border border-velmora-line bg-white/70 shadow-soft lg:order-2">
        <div className="aspect-[4/5] overflow-hidden bg-velmora-panel">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.shortName}
            className="h-full w-full object-cover"
            data-strk-img-id={`${activeImage.id}-active`}
            data-strk-img={`[${imagePromptId}]`}
            data-strk-img-ratio={activeImage.ratio}
            data-strk-img-width={activeImage.width}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
