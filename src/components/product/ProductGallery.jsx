import React, { useState } from 'react';

const ProductGallery = ({ images, material }) => {
  const [active, setActive] = useState(0);
  const currentImages = images?.[material] || images?.gold || [];

  if (!currentImages.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-sm bg-brand-warm">
        <img
          src={currentImages[active]}
          alt="Product image"
          className="h-[520px] w-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        {currentImages.map((src, idx) => (
          <button
            key={src}
            onClick={() => setActive(idx)}
            className={`h-16 w-16 overflow-hidden rounded-sm border ${
              active === idx ? 'border-brand-ink' : 'border-transparent'
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
