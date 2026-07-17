import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">@velmora.jewelry</p>
          <h2 className="serif-heading text-3xl md:text-4xl">As Worn By You</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 lg:px-20 pb-4">
        {ugcPosts.map((post) => (
          <div key={post.id} className="flex-shrink-0 w-48 md:w-56 relative group">
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-lg italic">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
