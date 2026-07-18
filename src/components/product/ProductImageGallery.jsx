import { useState } from 'react';

export default function ProductImageGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const thumbnails = product.images.thumbnails;
  const allImages = [product.images.primary, ...thumbnails];

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-velmora-sand/30 overflow-hidden">
        <img
          data-strk-img-id={`pdp-main-${product.id}`}
          data-strk-img={`[pdp-name-${product.id}] gold demi-fine jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {allImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-16 h-20 flex-shrink-0 overflow-hidden border transition-colors ${
              idx === selected ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
            }`}
          >
            <img
              data-strk-img-id={`pdp-thumb-${idx}-${product.id}`}
              data-strk-img={`[pdp-name-${product.id}] jewelry detail view ${idx + 1}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
