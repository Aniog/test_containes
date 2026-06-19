import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">@velmorajewelry</p>
          <h2 className="section-title">As Worn By You</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 md:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif-display text-white text-sm italic">
                  "{post.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
