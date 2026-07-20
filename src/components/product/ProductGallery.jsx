import { useState } from 'react'

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0)
  const thumbnails = [0, 1, 2]

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] bg-velmora-bg overflow-hidden border border-velmora-border">
        <img
          data-strk-img-id={`product-gallery-${product.id}-main`}
          data-strk-img={`[product-detail-name] [product-detail-category]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {thumbnails.map((idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelected(idx)}
            className={`relative aspect-square bg-velmora-bg overflow-hidden border transition-colors ${
              selected === idx
                ? 'border-velmora-accent'
                : 'border-velmora-border hover:border-velmora-muted'
            }`}
          >
            <img
              data-strk-img-id={`product-gallery-${product.id}-thumb-${idx}`}
              data-strk-img={`[product-detail-name] [product-detail-category]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
