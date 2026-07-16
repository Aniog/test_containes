import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product, nameId, descId }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Main image */}
      <div className="aspect-[3/4] bg-clay overflow-hidden mb-4">
        <img
          alt={`${product.name} - view ${active + 1}`}
          data-strk-img-id={`pdp-${product.id}-main-${active}`}
          data-strk-img={`[${descId}] [${nameId}] view ${active + 1}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 bg-clay overflow-hidden border-2 transition-colors ${
              i === active ? 'border-accent' : 'border-transparent hover:border-warm-sand'
            }`}
          >
            <img
              alt={`${product.name} thumbnail ${i + 1}`}
              data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
              data-strk-img={`[${descId}] [${nameId}] thumb ${i + 1}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="150"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
