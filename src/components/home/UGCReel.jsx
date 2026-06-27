import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -280 : 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-vel-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-2">
              As Seen On You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide">
              Styled by Our Community
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-vel-border flex items-center justify-center text-vel-taupe hover:text-vel-deep hover:border-vel-gold transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-vel-border flex items-center justify-center text-vel-taupe hover:text-vel-deep hover:border-vel-gold transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory"
        >
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
            >
              <div className="aspect-[9/16] rounded-sm bg-vel-light overflow-hidden relative">
                {/* Warm jewelry-toned gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-vel-deep/50 via-vel-deep/30 to-vel-gold/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 180" className="w-20 text-vel-gold/25">
                    <ellipse cx="60" cy="50" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="60" cy="65" r="5" fill="currentColor" />
                    <line x1="60" y1="85" x2="60" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-vel-deep/70 to-transparent">
                  <p className="font-serif italic text-white/80 text-xs tracking-wide">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
