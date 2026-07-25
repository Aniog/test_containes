import React from 'react';
import { UGC_ITEMS } from '../../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-ink-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-subtitle">As Seen On You</span>
          <h2 className="section-title mt-3">Styled by Our Community</h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {UGC_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-56 aspect-[9/16] flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream italic leading-tight">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}