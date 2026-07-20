import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Re-trigger when selected image changes (for main image)
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <div ref={containerRef}>
      {/* Hidden text for image queries */}
      <span className="sr-only" id={`gallery-title-${product.id}`}>
        {product.name} demi-fine gold jewelry
      </span>

      {/* Main image */}
      <div className="aspect-square bg-sand overflow-hidden mb-4">
        <img
          alt={`${product.name} - view ${selected + 1}`}
          data-strk-img-id={`gallery-main-${product.id}-${selected}`}
          data-strk-img={`[gallery-title-${product.id}]`}
          data-strk-img-ratio={product.imageRatio}
          data-strk-img-width={product.imageWidth}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 flex-shrink-0 bg-sand overflow-hidden border-2 transition-colors duration-200 ${
              i === selected ? 'border-espresso' : 'border-transparent hover:border-clay'
            }`}
          >
            <img
              alt={`${product.name} thumbnail ${i + 1}`}
              data-strk-img-id={`gallery-thumb-${product.id}-${i}`}
              data-strk-img={`[gallery-title-${product.id}]`}
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
