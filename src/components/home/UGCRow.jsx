import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 bg-[var(--color-cream)] overflow-hidden">
      <div className="container-wide mb-8">
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2 text-center">@velmorajewelry</p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center">As Worn By You</h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-lg italic">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
