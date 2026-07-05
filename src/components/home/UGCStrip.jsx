import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/lib/products';

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-velmora-espresso font-medium">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {ugcItems.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-b from-velmora-espresso/60 via-velmora-espresso/20 to-velmora-espresso/70 overflow-hidden group cursor-pointer">
                {/* Jewelry gradient representation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-velmora-gold/15 via-transparent to-velmora-rose/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-velmora-gold/20 blur-sm" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                  <p className="font-serif text-xs md:text-sm text-white italic leading-snug">
                    {item.caption}
                  </p>
                </div>

                {/* Play icon */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-t-[4px] border-b-[4px] border-l-white border-t-transparent border-b-transparent ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
