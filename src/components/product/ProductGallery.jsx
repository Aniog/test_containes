import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const thumbs = product.images.thumbnails || [];

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-sand rounded-sm overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={`pdp-${product.id}-main`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry closeup`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {thumbs.length > 0 && (
        <div className="flex gap-3">
          {thumbs.map((thumb, idx) => (
            <button
              key={thumb}
              onClick={() => setSelected(idx)}
              className={`w-16 h-20 md:w-20 md:h-24 rounded-sm overflow-hidden bg-sand transition-all duration-200 ${
                selected === idx ? 'ring-1 ring-warmgold ring-offset-2 ring-offset-cream' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                alt={`${product.name} view ${idx + 1}`}
                data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                data-strk-img={`[${product.titleId}] jewelry detail view`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="160"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
