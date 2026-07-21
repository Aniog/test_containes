import React from 'react';
import { ugcItems } from '../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <p className="section-subtitle text-pearl-400">As Seen On You</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream-50 tracking-wide mt-2">
            Worn by Real Women
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-cream-50 text-xs font-serif italic leading-tight">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-cream-300/60 text-[10px] mt-1 font-sans">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}