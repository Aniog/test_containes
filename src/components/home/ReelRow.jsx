import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold, elevated.' },
  { id: 'reel-2', caption: 'Layered moments.' },
  { id: 'reel-3', caption: 'Gift-worthy from the start.' },
  { id: 'reel-4', caption: 'Designed to be treasured.' },
  { id: 'reel-5', caption: 'Quiet luxury.' },
  { id: 'reel-6', caption: 'For you, always.' },
];

export function ReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-porcelain py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              @velmorajewelry
            </p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-ink sm:text-4xl">
              Styled by You
            </h2>
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-velmora-taupe sm:block">
            Scroll →
          </span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4 hide-scrollbar sm:gap-6 sm:px-6 lg:px-8">
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[160px] shrink-0 overflow-hidden rounded-lg bg-velmora-charcoal sm:w-[200px]"
          >
            <img
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={`[reel-caption-${index}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${index}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base italic leading-snug text-white"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
