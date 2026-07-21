import { useRef } from 'react';
import { ugcReels } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  return (
    <section className="py-12 md:py-16 bg-paper border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 md:mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-xl md:text-2xl tracking-wide">Styled by You</h2>
          <p className="mt-1 text-sm text-ink-500">Share your look #VelmoraWoman</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded-sm overflow-hidden snap-start cursor-pointer group"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic leading-snug">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
