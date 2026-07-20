import React from 'react';
import { ugcPosts } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="inline-block font-sans text-xs tracking-ultra-wide text-gold uppercase mb-3">
            Community
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            Seen on You
          </h2>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={post.image}
                  alt={`${post.username} styled with Velmora jewelry`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug">
                    "{post.caption}"
                  </p>
                  <p className="font-sans text-white/70 text-xs mt-2">
                    {post.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-parchment to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-parchment to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default UGCStrip;
