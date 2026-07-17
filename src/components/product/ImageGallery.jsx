import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

export default function ImageGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  const images = product.images || [product.id];

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden rounded-sm transition-all duration-300 ${
              selected === i
                ? 'ring-2 ring-gold ring-offset-2 ring-offset-cream'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              data-strk-img-id={`gallery-thumb-${product.id}-${i}`}
              data-strk-img={`${product.name} demi-fine gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[3/4] bg-sand/20 overflow-hidden rounded-sm">
        <img
          data-strk-img-id={`gallery-main-${product.id}`}
          data-strk-img={`${product.name} demi-fine gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelected((s) => (s === 0 ? images.length - 1 : s - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center text-espresso hover:bg-gold hover:text-white transition-colors shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelected((s) => (s === images.length - 1 ? 0 : s + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center text-espresso hover:bg-gold hover:text-white transition-colors shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
