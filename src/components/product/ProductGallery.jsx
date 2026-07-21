import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[4/5] bg-velvet-100 overflow-hidden">
        <img
          data-strk-img-id={`pdp-${product.id}-main`}
          data-strk-img={`[pdp-${product.id}-name]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`aspect-[4/5] bg-velvet-100 overflow-hidden transition-all duration-300 ${
              idx === selectedIndex ? 'ring-1 ring-gold' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
              data-strk-img={`[pdp-${product.id}-name] detail`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}