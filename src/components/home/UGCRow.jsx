import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 1, caption: 'Everyday elegance', search: 'gold jewelry on ear close up warm skin tone portrait' },
  { id: 2, caption: 'Layered & loved', search: 'gold necklace layered on neck woman editorial' },
  { id: 3, caption: 'Golden hour glow', search: 'gold huggie earrings on ear sunlight warm' },
  { id: 4, caption: 'Date night ready', search: 'woman wearing gold earrings portrait evening' },
  { id: 5, caption: 'Gift-worthy', search: 'gold jewelry gift box luxury unboxing' },
  { id: 6, caption: 'Stack & style', search: 'multiple gold rings stacked on hand close up' },
  { id: 7, caption: 'Minimalist mood', search: 'single gold chain necklace on collarbone minimal' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-surface-primary section-padding py-14 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-sans text-overline uppercase text-brand-gold mb-2">As Seen On You</p>
            <h2 className="font-serif text-heading-2 text-text-primary tracking-[0.03em]">#VelmoraStyle</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 border border-white/[0.12] rounded-full flex items-center justify-center text-text-secondary hover:text-brand-gold hover:border-brand-gold/40 transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 border border-white/[0.12] rounded-full flex items-center justify-center text-text-secondary hover:text-brand-gold hover:border-brand-gold/40 transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
        >
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
            >
              <div
                className="absolute inset-0"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`${item.search} instagram style vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              >
                <div className="w-full h-full bg-gradient-to-b from-brand-gold/10 to-surface-tertiary" />
              </div>

              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white/90 italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
