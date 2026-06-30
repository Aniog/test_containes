import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCReel = () => {
  return (
    <section className="py-16 md:py-20 bg-cream-200/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent mb-3 block">
            As Seen On You
          </span>
          <h2 className="section-title text-3xl md:text-4xl">Styled Your Way</h2>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="relative w-[180px] md:w-[220px] flex-shrink-0 group cursor-pointer"
            >
              {/* Vertical Image */}
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif italic text-sm text-cream-50 mb-1">
                  {post.caption}
                </p>
                <span className="text-[10px] text-cream-200/80">
                  {post.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
