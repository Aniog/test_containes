import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function ImageGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({ opacity: 0, x: '50%', y: '50%', bgX: '50%', bgY: '50%' });
  const mainRef = useRef(null);

  const images = product.images || [];

  const handleMouseMove = (e) => {
    const rect = mainRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({
      opacity: 1,
      x: `${x}%`,
      y: `${y}%`,
      bgX: `${x}%`,
      bgY: `${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails (desktop) */}
      <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              'aspect-[4/5] w-full overflow-hidden bg-sand border transition-colors',
              activeIndex === i ? 'border-ink' : 'border-transparent hover:border-hairline'
            )}
          >
            <img
              alt=""
              data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
              data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-subtitle]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image with hover zoom */}
      <div className="flex-1">
        <div
          ref={mainRef}
          className="relative aspect-[4/5] overflow-hidden bg-sand cursor-zoom-in group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((img, i) => (
            <img
              key={i}
              alt={`${product.name} — view ${i + 1}`}
              data-strk-img-id={`pdp-main-${product.id}-${i}`}
              data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-subtitle] [pdp-${product.id}-description] [pdp-${product.id}-material]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                activeIndex === i ? 'opacity-100' : 'opacity-0'
              )}
            />
          ))}

          {/* Zoom overlay (desktop) */}
          {activeIndex !== null && (
            <div
              className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{ opacity: zoomStyle.opacity }}
              aria-hidden="true"
            >
              <div
                className="absolute w-32 h-32 border border-cream/80 rounded-full"
                style={{
                  left: zoomStyle.x,
                  top: zoomStyle.y,
                  transform: 'translate(-50%, -50%)',
                  backgroundImage: `var(--zoom-bg-${activeIndex})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '250%',
                  backgroundPosition: `${zoomStyle.bgX} ${zoomStyle.bgY}`,
                }}
              />
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-cream/95 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase font-medium text-ink">
              <span className="block w-1.5 h-1.5 rounded-full bg-gold" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Thumbnails (mobile) */}
        <div className="md:hidden mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                'flex-shrink-0 w-16 aspect-[4/5] overflow-hidden bg-sand border transition-colors',
                activeIndex === i ? 'border-ink' : 'border-hairline'
              )}
            >
              <img
                alt=""
                data-strk-img-id={`pdp-thumb-mob-${product.id}-${i}`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-subtitle]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="160"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}