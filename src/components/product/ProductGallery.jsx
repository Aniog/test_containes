import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden">
        <img
          data-strk-img-id={`gallery-${product.id}-${activeIndex}`}
          data-strk-img={`${product.name} ${product.imgQuery} view ${activeIndex + 1}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} view ${activeIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-20 h-20 bg-cream-dark rounded-sm overflow-hidden border-2 transition-all duration-300 ${
              activeIndex === index ? 'border-gold-accent' : 'border-transparent hover:border-warm-border'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${product.id}-${index}`}
              data-strk-img={`${product.imgQuery} view ${index + 1}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} thumbnail ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
