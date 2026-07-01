import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-3">
            As Worn By You
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
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
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-serif italic">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
