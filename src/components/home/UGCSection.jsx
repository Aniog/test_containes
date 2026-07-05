import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-3">@velmorajewelry</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light text-[#1A1A1A]">
            As Worn By You
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden bg-[#F5F0EB]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="serif-heading text-white text-sm px-4 pb-4 italic">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
