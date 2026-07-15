import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--velmora-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            @velmorajewelry
          </p>
          <h2 className="velmora-heading text-3xl sm:text-4xl text-[var(--velmora-text)]">
            As Worn By You
          </h2>
          <div className="w-12 h-px bg-[var(--velmora-accent)] mx-auto mt-6" />
        </div>

        {/* Horizontal Scroll Row */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="velmora-heading text-white text-sm italic">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
