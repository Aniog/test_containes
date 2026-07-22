import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveImage(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              activeImage === i
                ? 'border-[var(--velmora-warm)]'
                : 'border-transparent hover:border-[var(--velmora-border)]'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${product.id}-${i}`}
              data-strk-img={`[${product.id}-title] [${product.id}-subtitle]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-[var(--velmora-cream)] overflow-hidden">
        <img
          data-strk-img-id={`main-${product.images[activeImage].id}`}
          data-strk-img={`[${product.id}-title] [${product.id}-subtitle]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
