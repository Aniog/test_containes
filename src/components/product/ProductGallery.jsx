import React, { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [activeImage, setActiveImage] = useState(0);
  const imageList = [images.primary, images.secondary, images.detail];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3">
        {imageList.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              activeImage === index
                ? 'border-[var(--velmora-accent)]'
                : 'border-transparent hover:border-[var(--velmora-border)]'
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[3/4] bg-[var(--velmora-border)] overflow-hidden">
        <img
          src={imageList[activeImage]}
          alt={productName}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
