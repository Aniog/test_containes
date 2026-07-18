import { useState } from "react"

export default function ProductGallery({ product, titleId, descId }) {
  const [active, setActive] = useState(0)
  const galleryIds = [product.imgId, ...product.gallery]
  const captions = [
    `${product.name} gold jewelry`,
    `${product.name} detail close up`,
    `${product.name} worn on model`,
    `${product.name} packaging`,
  ]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0">
        {galleryIds.map((gid, i) => (
          <button
            key={gid}
            onClick={() => setActive(i)}
            className={`relative w-16 md:w-20 aspect-[4/5] overflow-hidden bg-cream border transition-colors ${
              active === i ? "border-gold" : "border-sand hover:border-taupe"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt={`${product.name} thumbnail ${i + 1}`}
              data-strk-img-id={`${gid}-thumb`}
              data-strk-img={`[${descId}] [${titleId}] ${captions[i]}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream">
        {galleryIds.map((gid, i) => (
          <img
            key={gid}
            alt={`${product.name} view ${i + 1}`}
            data-strk-img-id={`${gid}-main`}
            data-strk-img={`[${descId}] [${titleId}] ${captions[i]}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
