import React, { useRef } from 'react';
import { ugcItems } from '../../data/products.js';

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-8">
        <h2 className="font-serif text-2xl lg:text-3xl uppercase tracking-widest">As Seen On You</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}