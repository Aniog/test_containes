import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3">@velmorajewelry</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">Styled by You</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll(-1)} className="w-10 h-10 border border-sand flex items-center justify-center hover:border-umber transition-colors" aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} className="w-10 h-10 border border-sand flex items-center justify-center hover:border-umber transition-colors" aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative shrink-0 w-[200px] md:w-[240px] aspect-[9/16] snap-start rounded-sm overflow-hidden group cursor-pointer"
          >
            <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}