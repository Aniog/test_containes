import React from 'react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-2">As Seen On</p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">@Velmora</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
        {ugcItems.map((item) => (
          <div key={item.id} className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-sm overflow-hidden group">
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xs tracking-widest uppercase">{item.handle}</p>
              <p className="text-white/80 text-sm mt-1">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
