import React, { useState } from 'react';

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4 md:gap-5">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-3 order-last md:order-first">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden border transition-colors ${
              selected === i
                ? 'border-gold'
                : 'border-charcoal-200 hover:border-charcoal-400'
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-taupe-100 overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}