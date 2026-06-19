import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [product.images.primary, product.images.secondary];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden bg-warm-100">
        <img
          src={images[activeIndex]}
          alt={`${product.name} - Image ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-20 h-20 overflow-hidden transition-all duration-200 ${
              activeIndex === index
                ? 'ring-2 ring-charcoal-800'
                : 'ring-1 ring-charcoal-200 hover:ring-charcoal-400'
            }`}
          >
            <img
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}