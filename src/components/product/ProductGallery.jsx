import React, { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeImages = images?.length ? images : [];

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="flex flex-col gap-2 md:gap-3">
          {safeImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-14 h-14 md:w-20 md:h-20 border overflow-hidden flex-shrink-0 transition-colors ${
                activeIndex === i ? 'border-accent-gold' : 'border-border-light hover:border-text-secondary'
              }`}
            >
              <img src={img} alt={`${productName} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="flex-1 aspect-square bg-deep/5 overflow-hidden">
        {safeImages[activeIndex] && (
          <img
            src={safeImages[activeIndex]}
            alt={productName}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
