import React, { useState } from 'react';

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
              selected === index
                ? 'border-brand-gold'
                : 'border-transparent hover:border-brand-border'
            }`}
          >
            <img
              src={img}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-brand-light overflow-hidden rounded-sm">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}