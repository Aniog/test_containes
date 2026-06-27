import { useRef } from 'react';
import { UGC_ITEMS } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);

  return (
    <section className="py-12 md:py-20 bg-velmora-cream-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-6 md:mb-8">
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-[24px] md:text-[32px] font-light text-velmora-charcoal">
          Styled by You
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 pb-2"
      >
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] bg-velmora-charcoal rounded-sm overflow-hidden group cursor-pointer"
          >
            {/* Placeholder visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-velmora-gold/40 flex items-center justify-center opacity-40">
                <div className="w-2.5 h-2.5 bg-velmora-gold rounded-full" />
              </div>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p className="font-serif text-[13px] md:text-[15px] text-white/90 leading-snug italic mb-1">
                &ldquo;{item.caption}&rdquo;
              </p>
              <p className="font-sans text-[10px] text-white/50 tracking-wider">
                {item.customer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}