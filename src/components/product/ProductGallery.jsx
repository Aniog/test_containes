import React, { useState } from 'react';

const ProductGallery = ({ product, material }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images[material] || product.images.gold;

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[3/4] bg-cream overflow-hidden">
        <img
          src={`https://placehold.co/600x800/f7f4ef/c9a96e?text=${encodeURIComponent(product.name + ' ' + (activeIndex + 1))}`}
          alt={`${product.name} - view ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((imgId, idx) => (
          <button
            key={imgId}
            onClick={() => setActiveIndex(idx)}
            className={`w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-all duration-200 ${
              activeIndex === idx ? 'border-gold' : 'border-transparent hover:border-warm-gray-light'
            }`}
          >
            <img
              src={`https://placehold.co/160x200/f7f4ef/c9a96e?text=${encodeURIComponent(product.name + ' ' + (idx + 1))}`}
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
