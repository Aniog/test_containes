import { useState } from 'react'
import { IMAGE_PLACEHOLDER } from '../../lib/utils'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = product.gallery[activeIndex]
  const activeTitleId = `${product.id}-${activeImage.id}-title`
  const activeDescriptionId = `${product.id}-${activeImage.id}-description`

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[32px] bg-velmora-sand/50 shadow-card">
        <img
          alt={`${product.name} ${activeImage.label}`}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`${product.id}-${activeImage.id}-main`}
          data-strk-img={`[${activeDescriptionId}] [${activeTitleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src={IMAGE_PLACEHOLDER}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {product.gallery.map((image, index) => {
          const titleId = `${product.id}-${image.id}-title`
          const descriptionId = `${product.id}-${image.id}-description`
          const isActive = activeIndex === index

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-[22px] border bg-white/70 shadow-card transition-all duration-300 ease-velvet ${
                isActive
                  ? 'border-velmora-champagne'
                  : 'border-velmora-ink/10 hover:border-velmora-ink/20'
              }`}
            >
              <img
                alt={`${product.name} ${image.label} thumbnail`}
                className="aspect-square w-full object-cover"
                data-strk-img-id={`${product.id}-${image.id}-thumb`}
                data-strk-img={`[${descriptionId}] [${titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src={IMAGE_PLACEHOLDER}
              />
              <span id={titleId} className="sr-only">
                {product.name} {image.label}
              </span>
              <span id={descriptionId} className="sr-only">
                {image.note}
              </span>
            </button>
          )
        })}
      </div>
      <p id={activeTitleId} className="sr-only">
        {product.name} {activeImage.label}
      </p>
      <p id={activeDescriptionId} className="sr-only">
        {activeImage.note}
      </p>
    </div>
  )
}
