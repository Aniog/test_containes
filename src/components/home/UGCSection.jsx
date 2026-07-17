import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-10">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">As Worn By You</h2>
          <div className="hairline-divider w-16 mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Tag @velmorajewelry to be featured</p>
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white serif-heading text-sm italic">
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
