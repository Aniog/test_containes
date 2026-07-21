import React, { useState } from 'react';

const ProductGallery = ({ images, material }) => {
  const [active, setActive] = useState(0);
  const currentImages = images?.[material] || images?.gold || [];
  const current = currentImages[active];

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl bg-brand-warm">
        <img
          src={current}
          alt="Product image"
          className="h-[520px] w-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        {currentImages.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors ${
              active === index ? 'border-brand-ink' : 'border-transparent'
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
