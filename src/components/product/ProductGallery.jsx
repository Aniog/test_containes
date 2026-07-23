import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const images = [
    { id: `product-${product.id}-main`, query: `[product-${product.id}-title]` },
    { id: `product-${product.id}-alt`, query: `[product-${product.id}-title] detail` },
    { id: `product-${product.id}-lifestyle`, query: `[product-${product.id}-title] lifestyle` },
    { id: `product-${product.id}-box`, query: `[product-${product.id}-title] packaging` },
  ];

  return (
    <div ref={containerRef} className="flex flex-col gap-4 md:flex-row-reverse">
      <div className="relative aspect-[4/5] w-full bg-taupe/30 md:flex-1">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              data-strk-img-id={img.id}
              data-strk-img={img.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto md:w-20 md:flex-col">
        {images.map((img, index) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(index)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden bg-taupe/30 ${
              active === index ? 'ring-1 ring-ink' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
