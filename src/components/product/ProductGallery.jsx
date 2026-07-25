import React, { useState } from 'react';

const ProductGallery = ({ images, name }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] overflow-hidden rounded-sm bg-brand-warm">
        <img
          src={images[active]}
          alt={`${name} view ${active + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setActive(idx)}
            className={`aspect-square overflow-hidden rounded-sm border-2 transition-colors ${
              active === idx ? 'border-brand-gold' : 'border-transparent'
            }`}
            aria-label={`View ${idx + 1}`}
          >
            <img src={src} alt={`${name} thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
