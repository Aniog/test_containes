import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">As Seen on You</h2>
          <p className="font-sans text-sm text-brand-text-secondary max-w-md mx-auto">
            Tag <span className="text-brand-accent">@velmorajewelry</span> to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex gap-4 min-w-max">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-48 md:w-56 aspect-[9/16] bg-brand-text rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span id={`reel-caption-${reel.id}`} className="hidden">{reel.caption}</span>
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}