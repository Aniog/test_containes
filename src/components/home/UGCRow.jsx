import React from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 bg-[#faf8f5]">
      <div className="container-padding mb-8">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2">As Worn By You</h2>
        <p className="text-sm text-gray-500 text-center tracking-wider uppercase">Tag @velmora to be featured</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-16 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
            <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-lg italic">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
