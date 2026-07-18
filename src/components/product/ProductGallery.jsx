import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-300 ${
              i === activeIndex ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.id}`}
              data-strk-img={img.query}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={200}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${productName} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image - render all images, show/hide with CSS */}
      <div className="flex-1 aspect-[3/4] bg-velmora-dark/5 overflow-hidden relative">
        {images.map((img, i) => (
          <img
            key={img.id}
            data-strk-img-id={img.id}
            data-strk-img={img.query}
            data-strk-img-ratio={img.ratio}
            data-strk-img-width={img.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={productName}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
