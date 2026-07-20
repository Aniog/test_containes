import React, { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden rounded-sm border-2 transition-all duration-300 ${
              activeIndex === i
                ? 'border-[var(--velmora-accent)]'
                : 'border-transparent hover:border-[var(--velmora-border)]'
            }`}
          >
            <img src={img} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden rounded-sm bg-[var(--velmora-bg-alt)]">
        <img
          src={images[activeIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
