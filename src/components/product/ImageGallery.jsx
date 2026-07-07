import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export default function ImageGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simulated gallery images (in production these would be real images)
  const images = [
    { id: `gallery-${product.id}-0`, search: `${product.name} ${product.imageSearch}` },
    { id: `gallery-${product.id}-1`, search: `${product.name} ${product.heroImageSearch}` },
    { id: `gallery-${product.id}-2`, search: `${product.name} detail close up jewelry` },
    { id: `gallery-${product.id}-3`, search: `${product.name} worn on model lifestyle` },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={cn(
              'flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-sm overflow-hidden border-2 transition-all duration-300',
              activeIndex === i
                ? 'border-brand-gold'
                : 'border-transparent opacity-60 hover:opacity-100'
            )}
          >
            <div
              className="w-full h-full"
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={`${img.search} thumbnail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="100"
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-gold-pale/20 to-surface-cream" />
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-surface-cream rounded-sm overflow-hidden relative">
        <div
          className="absolute inset-0"
          data-strk-img-id={images[activeIndex].id}
          data-strk-img={images[activeIndex].search}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-gold-pale/30 to-surface-cream" />
        </div>
      </div>
    </div>
  );
}
