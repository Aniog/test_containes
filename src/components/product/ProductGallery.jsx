import React, { useState } from 'react'

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
              i === active ? 'border-brand-gold' : 'border-transparent hover:border-brand-gold-light/50'
            }`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] overflow-hidden bg-brand-cream">
        <img
          src={images[active]?.src}
          alt={images[active]?.alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  )
}
