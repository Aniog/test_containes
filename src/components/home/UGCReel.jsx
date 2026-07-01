import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-500)] mb-3">@velmorajewelry</p>
          <h2 className="heading-serif text-3xl md:text-4xl">As Worn By You</h2>
        </div>
      </div>

      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map((post) => (
          <div key={post.id} className="flex-shrink-0 w-48 sm:w-56 md:w-64 snap-start">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white heading-serif text-lg italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
