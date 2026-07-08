import React, { useRef } from 'react';

const reels = [
  { id: 1, caption: 'Everyday elegance' },
  { id: 2, caption: 'Golden hour glow' },
  { id: 3, caption: 'Layered luxe' },
  { id: 4, caption: 'Minimal moment' },
  { id: 5, caption: 'Treasured details' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 lg:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
          #VelmoraWoman
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          Styled by You
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-lg overflow-hidden relative snap-start group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone/60 to-warmgray/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center">
                <span className="font-serif text-lg text-gold/60">V</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-serif text-lg text-white italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
