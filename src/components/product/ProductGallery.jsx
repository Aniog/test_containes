import React, { useState } from 'react';

const ProductGallery = ({ images, name }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
              active === idx ? 'border-brand-ink' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} view ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="flex-1 aspect-square overflow-hidden rounded-xl bg-brand-warm">
        <img src={images[active]} alt={name} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ProductGallery;
