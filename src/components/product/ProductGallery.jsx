import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product.id, activeIndex]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible lg:w-20 flex-shrink-0">
        {product.images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 transition-colors ${
              activeIndex === index
                ? 'border-[var(--velmora-dark)]'
                : 'border-transparent hover:border-[var(--velmora-border)]'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${product.id}-${index}`}
              data-strk-img={`[${product.id}-name] gold jewelry ${index === 0 ? 'main' : 'detail'}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden">
        <img
          data-strk-img-id={`main-${product.id}-${activeIndex}`}
          data-strk-img={`[${product.id}-name] [${product.id}-description] gold jewelry elegant`}
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
