import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../data/products';

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-ultra uppercase text-gold mb-2">@velmorajewelry</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light">Styled by You</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-divider hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-divider hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-2 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative rounded-sm overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={`https://placehold.co/440x780/3a2e28/d4b87a?text=UGC+${item.id}`}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-white italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
