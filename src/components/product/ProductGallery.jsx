import React, { useState } from 'react';

const ProductGallery = ({ images, name }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(idx)}
            className={`h-16 w-16 sm:h-20 sm:w-20 rounded-lg overflow-hidden border transition-colors ${
              active === idx ? 'border-brand-accent' : 'border-brand-line'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={src} alt={`${name} view ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="flex-1 aspect-square rounded-xl overflow-hidden bg-brand-warm">
        <img src={images[active]} alt={name} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ProductGallery;
