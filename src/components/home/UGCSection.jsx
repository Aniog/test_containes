import React from 'react';
import { ugcItems } from '@/data/products';

const UGCSection = () => {
  return (
    <section className="py-16 bg-charcoal overflow-hidden">
      {/* Section Header */}
      <div className="container-narrow mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">
          Community
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Styled by You
        </h2>
      </div>

      {/* Scrollable Reels */}
      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-4 scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] relative rounded-lg overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-white italic leading-relaxed">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] relative rounded-lg overflow-hidden bg-cream-200 flex items-center justify-center cursor-pointer group">
          <div className="text-center p-4">
            <p className="font-serif text-xl text-charcoal mb-2">@velmora</p>
            <p className="text-xs text-charcoal-light uppercase tracking-wider">
              Follow us for more
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UGCSection;
