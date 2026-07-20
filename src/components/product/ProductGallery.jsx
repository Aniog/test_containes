import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mainImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-velmora-bg-alt overflow-hidden">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 gallery-thumb ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={img} alt={`${productName} view ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
