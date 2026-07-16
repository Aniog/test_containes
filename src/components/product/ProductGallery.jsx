import React, { useState } from 'react';

export default function ProductGallery({ product, activeVariant }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;

  return (
    <div>
      {/* Main image */}
      <div className="aspect-[3/4] bg-sand overflow-hidden mb-4">
        <img
          alt={`${product.name} - view ${activeIndex + 1}`}
          data-strk-img-id={`pdp-${product.id}-${activeIndex}`}
          data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
          data-strk-img-ratio={images[activeIndex]?.ratio || '3x4'}
          data-strk-img-width={images[activeIndex]?.width || 700}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-400"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`w-16 md:w-20 aspect-square bg-sand overflow-hidden border-2 transition-colors ${
              i === activeIndex ? 'border-gold' : 'border-transparent hover:border-clay'
            }`}
            aria-label={`View ${i + 1}`}
          >
            <img
              alt={`${product.name} thumbnail ${i + 1}`}
              data-strk-img-id={`thumb-${product.id}-${i}`}
              data-strk-img={`[pdp-title-${product.id}] thumbnail`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
