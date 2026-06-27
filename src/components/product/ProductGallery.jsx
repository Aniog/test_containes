import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Simulate two images per product
  const images = product.images || [product.id, `${product.id}-alt`];

  return (
    <div ref={containerRef} className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[3/4] bg-[var(--color-surface-alt)] rounded-sm overflow-hidden">
        <img
          data-strk-img-id={`gallery-main-${product.id}`}
          data-strk-img={`[gallery-name-${product.id}] [gallery-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover animate-fade-in-scale"
        />
        <span id={`gallery-name-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`gallery-desc-${product.id}`} className="sr-only">{product.description}</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`aspect-square w-20 bg-[var(--color-surface-alt)] rounded-sm overflow-hidden border-2 transition-colors ${
              idx === selected ? 'border-[var(--color-accent)]' : 'border-transparent hover:border-[var(--color-border)]'
            }`}
          >
            <img
              data-strk-img-id={`gallery-thumb-${product.id}-${idx}`}
              data-strk-img={`[gallery-name-${product.id}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
