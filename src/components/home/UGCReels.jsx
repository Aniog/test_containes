import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-warmgray">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide">
            Styled by You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Scrollable reel strip */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 shadow-md flex items-center justify-center hover:bg-cream transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-0 md:px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcReels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[160px] md:w-[200px]"
              >
                <div className="relative aspect-[9/16] bg-espresso/5 overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-gold-light/20 via-warmgray to-taupe/10 flex items-center justify-center">
                    <span className="font-serif text-5xl text-gold/20 italic">{reel.username.charAt(1)}</span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="font-serif text-cream text-sm italic leading-snug"
                    >
                      {reel.caption}
                    </p>
                    <p className="text-cream/60 text-[10px] tracking-wider uppercase mt-1">
                      {reel.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 shadow-md flex items-center justify-center hover:bg-cream transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}