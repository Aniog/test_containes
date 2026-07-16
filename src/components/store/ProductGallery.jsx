import { useState } from 'react'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((label, index) => {
          const labelId = `${product.slug}-gallery-${index}-label`
          const nameId = `${product.slug}-gallery-name-${index}`
          const isActive = activeIndex === index

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-[1.35rem] border bg-velmora-paper transition ${
                isActive ? 'border-velmora-accent shadow-velmora-card' : 'border-velmora-line/70'
              }`}
            >
              <span id={labelId} className="sr-only">{label}</span>
              <span id={nameId} className="sr-only">{product.name}</span>
              <img
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-24 w-24 object-cover"
                data-strk-img-id={`${product.slug}-gallery-thumb-${index}`}
                data-strk-img={`[${labelId}] [${nameId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="280"
              />
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line/70 bg-velmora-paper shadow-velmora-card lg:order-2">
        {product.gallery.map((label, index) => {
          const labelId = `${product.slug}-gallery-detail-${index}`
          const nameId = `${product.slug}-gallery-title-${index}`

          return (
            <div key={label} className={activeIndex === index ? 'block' : 'hidden'}>
              <span id={labelId} className="sr-only">{label}</span>
              <span id={nameId} className="sr-only">{product.name}</span>
              <img
                alt={`${product.name} view ${index + 1}`}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${product.slug}-gallery-detail-image-${index}`}
                data-strk-img={`[${labelId}] [${nameId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
