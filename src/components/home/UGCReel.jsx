import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop' },
  { id: 2, caption: 'Layered & loved', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop' },
  { id: 3, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop' },
  { id: 4, caption: 'Minimal & chic', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=400&auto=format&fit=crop' },
  { id: 5, caption: 'Gift-worthy', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop' },
  { id: 6, caption: 'Stacked beauty', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=400&auto=format&fit=crop' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="section-padding mb-8 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Styled by You
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-20 pb-4"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-charcoal rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <p className="font-serif text-sm text-cream/90 italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
