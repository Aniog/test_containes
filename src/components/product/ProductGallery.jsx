import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-[#F8F5F1] flex items-center justify-center">
        <span className="text-[#6B5F57]">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-[#F8F5F1] overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-[#B8865C]'
                  : 'border-transparent hover:border-[#E5DFD6]'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} view ${index + 1}`}
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
