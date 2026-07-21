import { useState } from 'react'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = product.gallery[activeIndex]

  return (
    <div className="grid gap-4 lg:grid-cols-[90px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[1.25rem] border transition ${
              activeIndex === index
                ? 'border-velmora-gold shadow-soft'
                : 'border-velmora-stone/15'
            }`}
            aria-label={`Show image ${index + 1} of ${product.name}`}
          >
            <img
              alt={image.alt}
              className="h-20 w-20 object-cover"
              data-strk-img-id={`${image.imgId}-thumb`}
              data-strk-img={`[${image.descId}] [${image.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="220"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden rounded-[2rem] bg-white shadow-soft lg:order-2">
        <img
          alt={activeImage.alt}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={activeImage.imgId}
          data-strk-img={`[${activeImage.descId}] [${activeImage.titleId}]`}
          data-strk-img-ratio={activeImage.ratio}
          data-strk-img-width={activeImage.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </div>
  )
}
