import { useRef } from 'react';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);

  return (
    <section className="py-12 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velvet font-medium">
            Styled by You
          </h2>
          <p className="mt-2 text-sm text-taupe font-light">
            Tag @velmorajewelry to be featured
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-velvet overflow-hidden snap-start group cursor-pointer"
          >
            {/* Placeholder for UGC image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-taupe">Reel</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-velvet/20 to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-cream text-sm md:text-base italic leading-snug">
                &ldquo;{reel.caption}&rdquo;
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-cream/60">
                @{reel.label}_lover
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
