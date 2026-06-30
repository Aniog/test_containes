import React, { useState } from 'react';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1">
        {product.images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-16 md:w-20 md:h-20 bg-velmora-stone overflow-hidden border-2 transition-colors flex-shrink-0 ${i === activeIndex ? 'border-velmora-gold' : 'border-transparent'}`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
              data-strk-img={`[pdp-product-name-${product.id}] gold jewelry detail`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] md:aspect-[4/5] bg-velmora-stone overflow-hidden order-1 md:order-2">
        <img
          alt={product.name}
          data-strk-img-id={`pdp-main-${product.id}`}
          data-strk-img={`[pdp-product-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
