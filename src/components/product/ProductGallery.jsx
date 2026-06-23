import { useState } from 'react'
import ProductImage from '@/components/product/ProductImage.jsx'

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-hairline-dark bg-base-muted shadow-editorial">
        <div className="relative aspect-[4/5]">
          <ProductImage
            imageId={`pdp-${product.slug}-gallery-${activeIndex}`}
            configKey={`pdp-${product.slug}-gallery-${activeIndex}`}
            query={`[pdp-${product.slug}-gallery-${activeIndex}] [pdp-${product.slug}-title]`}
            alt={product.name}
            className="h-full w-full object-cover"
            width="1200"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {product.galleryNotes.map((note, index) => (
          <button
            key={note}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[1.25rem] border p-0 transition ${
              activeIndex === index
                ? 'border-accent shadow-soft'
                : 'border-hairline-dark opacity-75 hover:opacity-100'
            }`}
          >
            <ProductImage
              imageId={`pdp-${product.slug}-thumb-${index}`}
              configKey={`pdp-${product.slug}-gallery-${index}`}
              query={`[pdp-${product.slug}-gallery-${index}] [pdp-${product.slug}-title]`}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="aspect-square h-full w-full object-cover"
              width="400"
            />
            <span id={`pdp-${product.slug}-gallery-${index}`} className="sr-only">
              {note}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
