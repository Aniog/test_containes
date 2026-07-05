import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-16 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">@velmorajewelry</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">As Worn By You</h2>
          <div className="w-16 h-px bg-[#b8860b] mx-auto" />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map((post) => (
          <div key={post.id} className="flex-shrink-0 w-48 md:w-56 relative group">
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-sm font-serif italic p-4">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
