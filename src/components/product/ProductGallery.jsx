import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
        <img
          src={images[selected]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
              selected === index
                ? 'border-gold-500 opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
