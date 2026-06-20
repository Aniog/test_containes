import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-base-muted overflow-hidden relative">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - View ${selectedIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded[selectedIndex] ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => handleImageLoad(selectedIndex)}
        />
        {!imageLoaded[selectedIndex] && (
          <div className="absolute inset-0 img-placeholder pointer-events-none" />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 bg-base-muted overflow-hidden transition-all duration-200 ${
                selectedIndex === index
                  ? 'ring-2 ring-gold ring-offset-2 ring-offset-base'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image}
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
