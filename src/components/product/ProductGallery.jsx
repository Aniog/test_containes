import React, { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible md:w-20 flex-shrink-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
              activeIndex === index ? 'border-[var(--color-gold-500)]' : 'border-transparent hover:border-[var(--color-velmora-300)]'
            }`}
          >
            <img src={img} alt={`${productName} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="flex-1 aspect-[3/4] bg-[var(--color-velmora-100)] overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
