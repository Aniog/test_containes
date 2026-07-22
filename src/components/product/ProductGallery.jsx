import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - Desktop Left, Mobile Top */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`gallery-thumb flex-shrink-0 ${selectedIndex === index ? 'active' : ''}`}
            aria-label={`View image ${index + 1}`}
          >
            <img src={image} alt={`${productName} view ${index + 1}`} />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 order-1 md:order-2 aspect-square bg-[#F1EDE6] overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
