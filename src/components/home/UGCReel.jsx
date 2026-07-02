import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">@velmorajewelry</p>
          <h2 className="section-title mt-2">As Worn By You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-charcoal-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic">
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
