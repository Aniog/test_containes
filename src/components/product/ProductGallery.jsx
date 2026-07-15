import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-[var(--color-bg-alt)] flex items-center justify-center">
        <span className="text-[var(--color-text-muted)]">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="aspect-square bg-[var(--color-bg-alt)] overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - view ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-thumb ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={img} alt={`${productName} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
