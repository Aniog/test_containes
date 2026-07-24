import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative overflow-hidden bg-cream-200 aspect-[4/5]">
        <img
          data-strk-img-id={images[activeIndex]?.id}
          data-strk-img={`${productName} jewelry product elegant close up detailed`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${productName} - view ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`relative w-20 h-20 overflow-hidden bg-cream-200 border-2 transition-colors ${
                index === activeIndex ? 'border-gold-400' : 'border-transparent hover:border-cream-400'
              }`}
            >
              <img
                data-strk-img-id={`${image.id}-thumb`}
                data-strk-img={`${productName} jewelry product view ${index + 1}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="160"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${productName} - thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
