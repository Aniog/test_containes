import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Everyday elegance' },
  { id: 2, caption: 'Golden hour glow' },
  { id: 3, caption: 'Layered & loved' },
  { id: 4, caption: 'Minimal magic' },
  { id: 5, caption: 'Self-gift season' },
  { id: 6, caption: 'Dinner date ready' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="py-14 md:py-20 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-2">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink">
            How You Wear It
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-9 h-9 border border-velmora-taupe rounded-full flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-9 h-9 border border-velmora-taupe rounded-full flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden snap-start cursor-pointer group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 462"><rect fill="%232C2420" width="260" height="462"/><ellipse cx="130" cy="180" rx="70" ry="90" fill="%233D322B" opacity="0.5"/><circle cx="130" cy="170" r="35" fill="%23C9A96E" opacity="0.2"/><circle cx="160" cy="200" r="15" fill="%23C9A96E" opacity="0.3"/></svg>')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-sm italic tracking-wide">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
