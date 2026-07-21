import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="bg-[#EDE8E0] aspect-[4/3] w-full" />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="bg-[#EDE8E0] overflow-hidden aspect-[4/3] w-full">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - view ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden bg-[#EDE8E0] aspect-square w-20 border-2 transition-all ${
                selectedIndex === index
                  ? 'border-[#A67C52]'
                  : 'border-transparent hover:border-[#C4B8A8]'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
