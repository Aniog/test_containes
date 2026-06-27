import React from 'react';
import { ugcContent } from '@/data/products';

const UGCReels = () => {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)]">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
        {ugcContent.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[var(--color-bg-secondary)]">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-[var(--color-warm-white)] italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;