import React, { useState } from 'react';

const ImageGallery = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Generate image queries based on product
  const getImageQuery = (index) => {
    const base = product.name.toLowerCase();
    if (index === 0) return `${base} gold jewelry detail elegant`;
    if (index === 1) return `${base} gold jewelry on model`;
    return `${base} gold jewelry lifestyle`;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
        <img
          data-strk-img-id={`product-${product.slug}-detail`}
          data-strk-img={getImageQuery(selectedIndex)}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[selectedIndex]?.alt || product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`gallery-thumb w-20 h-20 bg-[#F0EBE3] overflow-hidden ${selectedIndex === index ? 'active' : ''}`}
          >
            <img
              data-strk-img-id={`product-${product.slug}-thumb-${index}`}
              data-strk-img={getImageQuery(index)}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
