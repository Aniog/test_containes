import { useEffect, useState } from 'react'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const titleId = `product-${product.id}-gallery-title`
  const descriptionId = `product-${product.id}-gallery-description`

  useEffect(() => {
    setActiveIndex(0)
  }, [product.id])

  return (
    <div className="grid gap-4 lg:grid-cols-[112px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((label, index) => {
          const thumbTextId = `product-${product.id}-thumb-${index}`

          const thumbPromptId = `product-${product.id}-thumb-${index}-prompt`

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-[22px] border transition duration-300 ${
                activeIndex === index
                  ? 'border-stone-900 shadow-md'
                  : 'border-stone-200 hover:border-stone-500'
              }`}
            >
              <img
                alt={`${product.name} thumbnail ${index + 1}`}
                className="aspect-square w-20 object-cover lg:w-28"
                data-strk-img-id={`product-${product.id}-thumb-${index}-img`}
                data-strk-img={`[${thumbPromptId}] [${titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="320"
                src={IMAGE_PLACEHOLDER}
              />
              <span id={thumbTextId} className="sr-only">
                {label}
              </span>
              <span id={thumbPromptId} className="sr-only">
                Close-up editorial jewelry image of {product.material.toLowerCase()} {product.tagline.toLowerCase()}, focused on {label.toLowerCase()}.
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[34px] bg-white shadow-[0_24px_60px_rgba(28,25,23,0.08)] lg:order-2">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`product-${product.id}-main-image`}
          data-strk-img={`[${descriptionId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1400"
          src={IMAGE_PLACEHOLDER}
        />
      </div>

      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descriptionId} className="sr-only">
        Warm luxury editorial product photography of {product.material.toLowerCase()} {product.tagline.toLowerCase()}, highlighting {product.gallery[activeIndex].toLowerCase()}.
      </span>
    </div>
  )
}

export default ProductGallery
