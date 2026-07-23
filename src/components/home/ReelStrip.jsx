import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold' },
  { id: 'reel-2', caption: 'Gift-worthy' },
  { id: 'reel-3', caption: 'Layered luxe' },
  { id: 'reel-4', caption: 'Soft sparkle' },
  { id: 'reel-5', caption: 'Minimal magic' },
  { id: 'reel-6', caption: 'Treasured details' },
];

export default function ReelStrip() {
  const ref = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="mx-auto px-5 md:px-8 lg:px-12 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-3">
            @velmorafine
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Worn by You</h2>
        </div>
        <a href="#" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] font-medium border-b border-ink pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors">
          Follow Along
        </a>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group"
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-white leading-tight"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
