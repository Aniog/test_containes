import React, { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2 md:gap-3 w-16 md:w-20 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`aspect-square overflow-hidden bg-velvet-100 border transition-all duration-300 ${
              i === selected ? 'border-gold' : 'border-transparent hover:border-velvet-300'
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] overflow-hidden bg-velvet-100">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </div>
  )
}