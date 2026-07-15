import React, { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id, activeIndex]);

  return (
    <div ref={containerRef} className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-charcoal/5 overflow-hidden">
        <img
          data-strk-img-id={`${product.images[activeIndex].id}-main`}
          data-strk-img={`[${product.id}-desc] [product-${product.id}-title] gold jewelry product elegant`}
          data-strk-img-ratio={product.images[activeIndex].ratio}
          data-strk-img-width={product.images[activeIndex].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`w-20 h-20 bg-charcoal/5 overflow-hidden border-2 transition-colors ${
              index === activeIndex ? 'border-charcoal' : 'border-transparent hover:border-charcoal/30'
            }`}
          >
            <img
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${product.id}-desc] gold jewelry detail closeup`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
