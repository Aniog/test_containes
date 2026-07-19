import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';

const UGCReels = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">@velmorajewelry</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">Styled by You</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll('left')} className="p-2 border border-velmora-sand hover:border-velmora-espresso transition-colors rounded-sm" aria-label="Scroll left">
              <ChevronLeft className="w-4 h-4 text-velmora-espresso" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 border border-velmora-sand hover:border-velmora-espresso transition-colors rounded-sm" aria-label="Scroll right">
              <ChevronRight className="w-4 h-4 text-velmora-espresso" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover bg-velmora-sand/30"
              alt={reel.caption}
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`gold jewelry worn ear neck woman elegant ${reel.caption}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/10 transition-colors" />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-velmora-charcoal/70 to-transparent">
              <p className="font-serif text-sm text-velmora-ivory italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
