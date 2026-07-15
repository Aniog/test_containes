import { useState } from 'react';

export default function ImageGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 flex-shrink-0">
        {product.images.map((img, i) => (
          <button
            key={img}
            onClick={() => setSelectedIndex(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-velvet-100 overflow-hidden border-2 transition-colors ${
              selectedIndex === i ? 'border-velvet-600' : 'border-transparent hover:border-charcoal-300'
            }`}
          >
            <img
              className="w-full h-full object-cover"
              data-strk-img-id={`pdp-thumb-${img}`}
              data-strk-img={`[pdp-product-name]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velvet-100 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          data-strk-img-id={`pdp-main-${product.images[selectedIndex]}`}
          data-strk-img={`[pdp-product-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
      </div>
    </div>
  );
}