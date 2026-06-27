import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">@velmorajewelry</p>
          <h2 className="text-3xl md:text-4xl font-serif">As Worn By You</h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-serif italic">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
