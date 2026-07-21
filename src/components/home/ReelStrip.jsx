import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';
import { StockImg } from '@/lib/images';

export default function ReelStrip() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            @velmorajewelry
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <StockImg
              id={`ugc-${reel.id}`}
              query={`[ugc-caption-${reel.id}]`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id={`ugc-caption-${reel.id}`} className="sr-only">
              {reel.caption} gold jewelry
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-base md:text-lg italic text-white/90">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
