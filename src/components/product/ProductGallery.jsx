import React, { useState } from 'react';

const ProductGallery = ({ images, name }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(idx)}
            className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border ${
              active === idx ? 'border-ink' : 'border-border'
            } bg-background`}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={src} alt={`${name} ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-background">
        <img src={images[active]} alt={name} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ProductGallery;
