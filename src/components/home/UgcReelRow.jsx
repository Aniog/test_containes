import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Golden hour with the Aura cuff', tag: '@isabella.m' },
  { id: 2, caption: 'Layered the Flora necklace for date night', tag: '@sophia.k' },
  { id: 3, caption: 'Obsessed with these huggies', tag: '@olivia.r' },
  { id: 4, caption: 'New season, new stack', tag: '@emma.w' },
  { id: 5, caption: 'Everyday gold — that\'s the mood', tag: '@charlotte.t' },
  { id: 6, caption: 'Gift from him — the Heirloom set', tag: '@mia.j' },
];

export default function UgcReelRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-stone text-xs tracking-widest uppercase mb-3">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">Styled by You</h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-warm-200 text-stone hover:text-charcoal hover:border-warm-400 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4.5 h-4.5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-warm-200 text-stone hover:text-charcoal hover:border-warm-400 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4.5 h-4.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto ugc-scroll pl-5 md:pl-10 lg:pl-16 pr-5 md:pr-10 lg:pr-16 pb-2"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative group cursor-pointer bg-warm-100 overflow-hidden"
          >
            {/* Placeholder image */}
            <div className="absolute inset-0 bg-gradient-to-b from-warm-200/50 via-warm-300/30 to-midnight/60" />
            <div className="absolute top-3 left-3 bg-warm-500/90 text-white text-[9px] tracking-wider uppercase px-2 py-0.5">
              Reel
            </div>

            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent">
              <p className="font-serif text-sm text-white italic leading-snug mb-1">
                "{reel.caption}"
              </p>
              <p className="text-[10px] text-white/60 tracking-wider">{reel.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
