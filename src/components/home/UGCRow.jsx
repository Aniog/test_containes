import React from 'react';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-20 md:py-28 bg-taupe-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900">
            Worn by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-16">
        <div className="flex gap-4 md:gap-5 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-56 aspect-[9/16] bg-taupe-200 overflow-hidden shrink-0 group cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="font-serif text-sm md:text-base text-cream-50 font-light italic leading-snug">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}