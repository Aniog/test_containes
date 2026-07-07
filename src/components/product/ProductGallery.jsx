import React, { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
              activeIndex === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-taupe-light'
            }`}
          >
            <img src={img} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-warm">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  )
}
