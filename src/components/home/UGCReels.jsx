import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Morning light with our Golden Sphere Huggies', bg: 'from-amber-900/80 to-velmora-dark' },
  { id: 2, caption: 'Layered and luminous — the Vivid Aura stack', bg: 'from-rose-900/80 to-velmora-dark' },
  { id: 3, caption: 'Date night elegance with Amber Lace drops', bg: 'from-stone-800/80 to-velmora-dark' },
  { id: 4, caption: 'The Royal Heirloom Set, unboxed', bg: 'from-velmora-charcoal/80 to-velmora-dark' },
  { id: 5, caption: 'Everyday gold — Majestic Flora Nectar', bg: 'from-yellow-900/80 to-velmora-dark' },
  { id: 6, caption: 'Minimal stack, maximum impact', bg: 'from-velmora-dark/80 to-velmora-dark' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-dark overflow-hidden">
      <div className="velmora-container mb-10 md:mb-14">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-gold/70 mb-3">
              As Seen On You
            </p>
            <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Styled by Our Community
            </h2>
            <div className="w-12 h-px bg-velmora-gold/40 mt-4" />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll(-1)} className="p-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} className="p-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-12 overflow-x-auto scrollbar-hide pb-4"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative overflow-hidden group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${reel.bg} flex items-center justify-center`}>
              <span className="font-serif text-velmora-gold/30 text-6xl italic">V</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/90 via-velmora-dark/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white/90 text-sm leading-snug italic">
                &ldquo;{reel.caption}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
