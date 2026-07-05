import React from 'react';

const ugcItems = [
  { id: 1, caption: 'Everyday elegance', query: 'gold earrings on ear close up warm light' },
  { id: 2, caption: 'Stack & shine', query: 'layered gold necklaces on neck model' },
  { id: 3, caption: 'Golden hour glow', query: 'gold huggie earrings warm light close up' },
  { id: 4, caption: 'Gift of gold', query: 'jewelry gift box gold set velvet' },
  { id: 5, caption: 'Made to layer', query: 'gold necklace stack on model collarbone' },
  { id: 6, caption: 'Crystal clear beauty', query: 'crystal earrings sparkle close up gold' },
];

export default function UGCRow() {
  return (
    <section className="py-16 lg:py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-3">
          @VelmoraJewelry
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl text-ivory tracking-wide">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 sm:w-52 aspect-[9/16] flex-shrink-0 bg-charcoal/20 border border-charcoal/30 overflow-hidden group cursor-pointer"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] text-muted/20 tracking-widest uppercase">UGC</span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-heading text-sm text-ivory/90 tracking-wider italic">
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
