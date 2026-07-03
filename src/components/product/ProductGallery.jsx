import React, { useState } from 'react';

const ProductGallery = ({ images, name }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-square overflow-hidden rounded-2xl bg-background">
        <img src={images[active]} alt={`${name} view ${active + 1}`} className="h-full w-full object-cover" />
      </div>
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border transition-colors ${
              active === index ? 'border-ink' : 'border-transparent'
            }`}
            aria-label={`View ${index + 1}`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
