import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductGallery = ({ images, productName }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="aspect-square overflow-hidden rounded-2xl bg-base-100">
        <img
          src={images[active]}
          alt={productName}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              'aspect-square overflow-hidden rounded-xl bg-base-100 transition-all duration-200',
              active === index ? 'ring-2 ring-gold-500' : 'opacity-70 hover:opacity-100',
            )}
          >
            <img src={image} alt={`${productName} view ${index + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
