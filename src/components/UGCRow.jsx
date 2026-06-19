import React, { useRef } from 'react';
import { ugcItems } from '../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-20 bg-[var(--cream)] border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-2">Styled by You</p>
        <h2 className="font-serif text-2xl md:text-3xl">@velmorafinejewelry</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent(item.image)}?width=400&height=700&nologo=true&seed=ugc${item.id}`}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm font-serif italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
