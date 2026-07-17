import React from 'react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-2">As Worn By You</p>
            <h2 className="section-heading">The Velmora Edit</h2>
          </div>
          <a href="#" className="hidden md:inline-flex btn-outline">
            Follow Us
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 md:w-56 snap-start"
            >
              <div className="aspect-[9/16] bg-background rounded-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white text-xs font-medium tracking-wide">{item.handle}</p>
                <p className="text-white/80 text-[11px] mt-0.5">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <a href="#" className="btn-outline">
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
