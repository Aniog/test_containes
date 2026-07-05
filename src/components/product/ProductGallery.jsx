import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`flex-shrink-0 w-20 h-24 md:w-24 md:h-28 overflow-hidden border-2 transition-all duration-300 ${
              activeImage === index
                ? 'border-[var(--color-gold)]'
                : 'border-transparent hover:border-[var(--color-border)]'
            }`}
          >
            <img
              src={image}
              alt={`${productName} - View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-[var(--color-cream)]">
        <img
          src={images[activeImage]}
          alt={productName}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
