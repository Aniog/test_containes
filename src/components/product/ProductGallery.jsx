import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ productId, productName, images }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails (vertical strip on desktop, horizontal on mobile) */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 border transition-colors ${
              i === active ? 'border-espresso' : 'border-sand hover:border-stone'
            }`}
          >
            <div
              className="w-full h-full bg-sand-light"
              data-strk-bg-id={`gallery-thumb-${productId}-${i}`}
              data-strk-bg={`[pdp-name-${productId}] gold jewelry thumbnail ${i}`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="200"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-sand-light order-1 md:order-2 overflow-hidden">
        <div
          className="w-full h-full"
          data-strk-bg-id={`gallery-main-${productId}-${active}`}
          data-strk-bg={`[pdp-name-${productId}] gold jewelry main view ${active}`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="800"
        />
      </div>
    </div>
  );
}
