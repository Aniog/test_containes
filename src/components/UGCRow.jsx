import React from 'react';
import { ugcItems } from '../data/products';

export default function UGCRow() {
  return (
    <section className="py-section lg:py-section-lg bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">As Seen On You</p>
          <h2 className="font-serif text-heading-md text-white">Worn in Real Life</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto pb-4 -mx-6 lg:-mx-8">
        <div className="flex gap-4 px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}