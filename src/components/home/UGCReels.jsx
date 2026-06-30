import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Styled by You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
              #VelmoraGlow
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] h-[320px] md:h-[380px] rounded-lg overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-base text-white italic leading-snug">
                  "{reel.caption}"
                </p>
                <p className="font-sans text-[11px] text-white/60 mt-1.5 tracking-wide">
                  {reel.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
