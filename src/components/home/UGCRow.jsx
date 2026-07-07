import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-[var(--velmora-bg-alt)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] text-center mb-2">
          @velmora
        </p>
        <h2 className="serif-heading text-2xl md:text-3xl text-center">
          As Worn By You
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="serif-heading text-white text-sm italic">
                  "{post.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
