import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 overflow-hidden transition-all duration-300',
              activeIndex === index
                ? 'border-brand-gold'
                : 'border-brand-light-gray hover:border-brand-gold-light'
            )}
          >
            <img
              data-strk-img-id={`gallery-thumb-${image.id}`}
              data-strk-img={`[${image.id}-alt] jewelry gold detail`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square bg-brand-off-white overflow-hidden">
        <img
          data-strk-img-id={`gallery-main-${images[activeIndex].id}`}
          data-strk-img={`[product-detail-title] [product-detail-desc] jewelry gold elegant`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${productName} main view`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
