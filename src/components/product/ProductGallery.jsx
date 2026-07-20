import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

// Multi-image gallery. We render N <img>s inside a shared container so a single
// ImageHelper.loadImages call handles them all.
function ProductGallery({ product, activeVariant }) {
  const variantImages = product.images[activeVariant] || product.images[product.defaultVariant];
  // Build a list of images: primary + secondary (if any) and a styled lifestyle shot
  const list = [
    variantImages.primary,
    variantImages.secondary,
    {
      id: `${variantImages.primary.id}-detail`,
      query: `${variantImages.primary.query.split(',').slice(0, 3).join(',')}, close up detail, soft warm light`,
      ratio: '4x5',
    },
  ].filter(Boolean);

  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    setActive(0);
  }, [activeVariant]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeVariant, product.id]);

  // Sync thumbnail scroll on mobile
  useEffect(() => {
    if (!thumbsRef.current) return;
    const el = thumbsRef.current.querySelector(`[data-thumb="${active}"]`);
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active]);

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        {list.map((img, i) => (
          <img
            key={img.id}
            alt={`${product.name}, view ${i + 1}`}
            data-strk-img-id={img.id}
            data-strk-img={img.query}
            data-strk-img-ratio={img.ratio}
            data-strk-img-width="1200"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              i === active ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
      </div>

      {/* Thumbnails — horizontal on mobile, vertical on desktop */}
      <div
        ref={thumbsRef}
        className="order-2 flex gap-2 overflow-x-auto scrollbar-thin md:order-1 md:flex-col md:gap-3 md:overflow-visible"
      >
        {list.map((img, i) => (
          <button
            key={img.id}
            data-thumb={i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              'relative aspect-[4/5] w-20 flex-shrink-0 overflow-hidden border bg-linen transition-colors duration-300 md:w-full',
              i === active ? 'border-espresso' : 'border-sand hover:border-mink'
            )}
          >
            <img
              alt=""
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width="240"
              loading="lazy"
              decoding="async"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
