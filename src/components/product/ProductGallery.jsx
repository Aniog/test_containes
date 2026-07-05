import { useState } from 'react'

const galleryViews = [
  {
    key: 'front',
    label: 'Front view',
    descriptor: 'polished front portrait with warm glow',
  },
  {
    key: 'detail',
    label: 'Detail view',
    descriptor: 'close-up detail shot highlighting texture and gold finish',
  },
  {
    key: 'worn',
    label: 'Worn view',
    descriptor: 'styled on model in soft editorial light',
  },
]

function ProductGallery({ product }) {
  const [activeView, setActiveView] = useState(galleryViews[0])
  const titleId = `gallery-title-${product.slug}`

  return (
    <div className="grid gap-5 lg:grid-cols-[108px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryViews.map((view) => {
          const descId = `gallery-${view.key}-${product.slug}`
          const active = activeView.key === view.key

          return (
            <button
              key={view.key}
              type="button"
              className={[
                'overflow-hidden rounded-[20px] border bg-pearl transition duration-300',
                active ? 'border-champagne shadow-card' : 'border-line hover:border-champagne',
              ].join(' ')}
              onClick={() => setActiveView(view)}
            >
              <img
                alt={`${product.name} ${view.label}`}
                className="aspect-[4/5] h-24 w-20 object-cover md:h-28 md:w-24"
                data-strk-img-id={`gallery-thumb-${product.slug}-${view.key}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id={descId} className="sr-only">
                {view.descriptor}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[32px] border border-line bg-pearl shadow-card lg:order-2">
        <img
          alt={product.name}
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id={`gallery-main-${product.slug}-${activeView.key}`}
          data-strk-img={`[gallery-${activeView.key}-${product.slug}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <span id={titleId} className="sr-only">
          {product.name}
        </span>
      </div>
    </div>
  )
}

export default ProductGallery
