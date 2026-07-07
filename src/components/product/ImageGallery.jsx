import React, { useState } from 'react'

export default function ImageGallery({ images, productName }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col md:flex-row-reverse gap-4">
      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-truffle-100 overflow-hidden">
        <img
          src={images[selected]?.src}
          alt={`${productName} — view ${selected + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto thin-scrollbar">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelected(i)}
            className={`shrink-0 w-16 md:w-20 aspect-[3/4] bg-truffle-100 overflow-hidden transition-all duration-200 ${
              i === selected ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-90'
            }`}
          >
            <img
              src={img.src}
              alt={`${productName} thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
