import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-3 md:gap-4">
      <span id={product.titleId} className="hidden">{product.name}</span>
      <span id={product.descId} className="hidden">{product.summary}</span>

      {/* Main image */}
      <div className="aspect-square bg-velmora-muted overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={`pdp-main-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 md:gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 md:w-20 aspect-square bg-velmora-muted border-2 transition-colors overflow-hidden ${
              selected === i ? 'border-velmora-accent' : 'border-transparent hover:border-velmora-muted-2'
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
