import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const images = product.images;
  const current = images[active];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible scrollbar-hide md:w-20 lg:w-24 flex-shrink-0">
        {images.map((img, idx) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View image ${idx + 1}`}
            aria-current={active === idx}
            className={cn(
              'relative aspect-[4/5] w-20 md:w-full bg-champagne/30 overflow-hidden border transition-all duration-300 ease-editorial flex-shrink-0',
              active === idx ? 'border-ink' : 'border-transparent hover:border-hairline'
            )}
          >
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id={`main-${img.imgId}`}
              data-strk-img={`[${img.descId}] [${img.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 min-w-0">
        <div className="relative aspect-[4/5] w-full bg-champagne/30 overflow-hidden">
          <img
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            key={current.imgId}
            data-strk-img-id={`main-${current.imgId}`}
            data-strk-img={`[${current.descId}] [${current.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </div>
  );
}
