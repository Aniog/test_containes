import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-2">
              As Seen On You
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-light">
              Worn in Real Life
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm text-gold-600 hover:text-gold-700 tracking-wider uppercase font-sans transition-colors"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-36 sm:w-44 md:w-52 aspect-[9/16] bg-ink-200 rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                data-strk-bg-id={`ugc-${reel.id}`}
                data-strk-bg={`[ugc-caption-${reel.id}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                className="absolute inset-0 bg-ink-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic leading-tight"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 md:hidden">
        <a
          href="#"
          className="text-sm text-gold-600 hover:text-gold-700 tracking-wider uppercase font-sans transition-colors"
        >
          Follow @velmora
        </a>
      </div>
    </section>
  );
}