import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title text-[var(--velmora-text)] mb-3">As Worn By You</h2>
          <p className="text-sm text-[var(--velmora-text-muted)] tracking-wide">
            Tag @velmorajewelry to be featured
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="flex-none w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
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
