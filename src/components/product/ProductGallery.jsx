import { useState } from 'react';

export default function ProductGallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-4">
      {/* Main image */}
      <div className="flex-1 aspect-[4/5] overflow-hidden bg-cream-dark">
        <img
          src={images[selectedIndex]}
          alt={`${name} - view ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-first md:order-none">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
              selectedIndex === index
                ? 'border-gold opacity-100'
                : 'border-beige/60 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}