import React, { useRef } from 'react';

const ugcItems = [
  { caption: 'Morning light with the Golden Sphere Huggies ✨', label: '@claire.m', imgId: 'ugc-claire-01a2b3' },
  { caption: 'Date night layers — Majestic Flora never disappoints', label: '@sofia.r', imgId: 'ugc-sofia-02c4d5' },
  { caption: 'The perfect gift set — my sister cried happy tears', label: '@amara.k', imgId: 'ugc-amara-03e6f7' },
  { caption: 'Everyday gold — these huggies live on my ears', label: '@julia.w', imgId: 'ugc-julia-04g8h9' },
  { caption: 'The Vivid Aura cuff is my new signature piece', label: '@tess.l', imgId: 'ugc-tess-05i0j1' },
  { caption: 'Gold stacking done right — Velmora quality is unmatched', label: '@nadia.m', imgId: 'ugc-nadia-06k2l3' },
];

export default function UGCStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-10 md:mb-14">
        <p id="ugc-section-label" className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
          As Seen On You
        </p>
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
          Velmora IRL
        </h2>
        <hr className="hairline-divider w-12 mx-auto mt-6" />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[160px] md:w-[200px] snap-center group cursor-pointer"
          >
            {/* Image — 9:16 vertical card with strk background */}
            <div className="aspect-[9/16] overflow-hidden relative">
              <div
                className="absolute inset-0"
                data-strk-bg-id={item.imgId}
                data-strk-bg={`[ugc-caption-${i}] [ugc-section-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p id={`ugc-caption-${i}`} className="font-serif text-white text-xs leading-relaxed italic">
                  {item.caption}
                </p>
              </div>
            </div>
            <p className="mt-2 text-[10px] tracking-wider uppercase text-velmora-taupe">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
