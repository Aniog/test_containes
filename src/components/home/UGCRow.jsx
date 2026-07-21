import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f3f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">@velmorajewelry</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl tracking-[0.1em]">As Worn By You</h2>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden group">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif italic text-sm mb-1">{post.caption}</p>
                <p className="text-xs text-white/80">{post.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
