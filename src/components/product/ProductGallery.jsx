import { useState } from "react"

export default function ProductGallery({ product }) {
  const images = [
    { id: product.imgId, query: `[${product.id}-name] gold jewelry worn by model close up warm light editorial` },
    { id: product.imgIdAlt, query: `[${product.id}-name] gold jewelry still life cream background` },
    { id: `${product.imgId}-detail`, query: `[${product.id}-name] gold jewelry macro detail texture warm light` },
    { id: `${product.imgId}-lifestyle`, query: `[${product.id}-name] gold jewelry on model lifestyle editorial` },
  ]
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails (desktop: left column; mobile: horizontal) */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0 overflow-x-auto md:overflow-visible no-scrollbar">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={[
              "shrink-0 w-20 h-24 overflow-hidden border transition-colors",
              active === i ? "border-ink" : "border-hairline hover:border-muted",
            ].join(" ")}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              loading="lazy"
              className="h-full w-full object-cover img-placeholder"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-paper">
        <img
          key={images[active].id}
          alt={product.name}
          data-strk-img-id={`${images[active].id}-main`}
          data-strk-img={images[active].query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover img-placeholder animate-fade-in"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </div>
  )
}
