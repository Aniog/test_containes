import { useEffect, useState } from 'react'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [product.slug])

  return (
    <div className="grid gap-4 lg:grid-cols-[120px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-1 lg:flex-col">
        {product.galleryViews.map((view, index) => {
          const titleId = `${product.slug}-gallery-title-${index}`
          const descId = `${product.slug}-gallery-desc-${index}`

          return (
            <button
              key={titleId}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-[1.3rem] border transition ${
                activeIndex === index
                  ? 'border-velmora-gold shadow-card'
                  : 'border-velmora-line'
              }`}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                aria-hidden="true"
                className="h-24 w-24 object-cover lg:h-28 lg:w-full"
                data-strk-img-id={`${product.slug}-gallery-thumb-${index}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="280"
              />
              <span id={titleId} className="sr-only">
                {product.name} view {index + 1}
              </span>
              <span id={descId} className="sr-only">
                {view}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-panel shadow-card lg:order-2">
        {product.galleryViews.map((view, index) => {
          const titleId = `${product.slug}-hero-title-${index}`
          const descId = `${product.slug}-hero-desc-${index}`

          return (
            <div key={titleId} className={activeIndex === index ? 'block' : 'hidden'}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${product.slug}-gallery-main-${index}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
              <span id={titleId} className="sr-only">
                {product.name}
              </span>
              <span id={descId} className="sr-only">
                {view}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
