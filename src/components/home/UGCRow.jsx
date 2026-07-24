import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 md:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl text-base md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto px-6 pb-2 md:gap-5 md:px-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0"
            style={{ width: 'clamp(200px, 28vw, 320px)' }}
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-base">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer style"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-white/95"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
