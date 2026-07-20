import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-sand/20">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">As Seen On You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Styled by Our Community</h2>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream shadow-md items-center justify-center hover:bg-charcoal hover:text-cream transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream shadow-md items-center justify-center hover:bg-charcoal hover:text-cream transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              <div className="aspect-[9/16] bg-gradient-to-b from-gold/10 via-rose/5 to-charcoal/30 rounded-sm overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <p className="font-serif text-sm text-cream italic leading-snug">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-xs text-cream/60 mt-2">@{item.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
