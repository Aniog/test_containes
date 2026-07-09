import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-pearl">
      <div className="text-center mb-10 md:mb-14 section-padding">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink">
          As Seen On You
        </h2>
        <p className="text-velmora-stone text-sm mt-3">
          Tag <span className="text-velmora-gold">@velmora</span> to be featured
        </p>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center text-velmora-ink hover:text-velmora-gold transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center text-velmora-ink hover:text-velmora-gold transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-velmora-sand/30 overflow-hidden">
                <div className="absolute inset-0 bg-velmora-sand/50 flex items-center justify-center">
                  <span className="text-velmora-stone/40 text-[10px] tracking-wider">
                    {item.caption.slice(0, 4).toUpperCase()}
                  </span>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-ink/70 to-transparent p-4">
                  <p className="text-white text-xs font-serif italic leading-snug">
                    {item.caption}
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