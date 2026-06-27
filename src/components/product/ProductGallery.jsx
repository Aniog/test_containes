import React, { useState } from 'react';
import { getPlaceholderSvg } from '@/lib/utils';

const ProductGallery = ({ product }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] bg-velmora-cream overflow-hidden">
        <img
          data-strk-img-id={`product-${product.id}-gallery-main`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial warm`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src={getPlaceholderSvg(`${product.id}-main`, product.name)}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p id={product.titleId} className="sr-only" aria-hidden="true">{product.name}</p>
      <p id={product.descId} className="sr-only" aria-hidden="true">{product.description}</p>

      <div className="grid grid-cols-4 gap-3">
        {product.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`relative aspect-square bg-velmora-cream overflow-hidden border transition-colors ${
              selected === idx ? 'border-velmora-charcoal' : 'border-velmora-border hover:border-velmora-muted'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              data-strk-img-id={`product-${product.id}-thumb-${idx}`}
              data-strk-img={`[${product.titleId}] gold jewelry detail warm`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src={getPlaceholderSvg(`${product.id}-thumb-${idx}`, `${product.name} ${idx + 1}`)}
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
