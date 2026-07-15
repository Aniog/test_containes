import React, { useState } from 'react';

export default function ProductGallery({ product, selectedVariant }) {
  const imgIds = product.imgIds[selectedVariant] || Object.values(product.imgIds)[0];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible hide-scrollbar">
        {imgIds.map((imgId, i) => (
          <button
            key={imgId}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-warm overflow-hidden transition-all duration-300 ${
              i === activeIndex ? 'ring-1 ring-espresso' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[3/4] bg-warm overflow-hidden">
        <img
          alt={`${product.name} view ${activeIndex + 1}`}
          data-strk-img-id={`${imgIds[activeIndex]}-main`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
