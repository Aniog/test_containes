import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products';

const UGCStrip = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-12 bg-cream overflow-hidden">
      <div className="container-main mb-8">
        <div className="text-center">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-3">
            Real Style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-0 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Spacer for centering on larger screens */}
        <div className="hidden md:block md:w-[calc((100vw-1280px)/2)] flex-shrink-0" />
        
        {ugcPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative aspect-[9/16] bg-espresso/10 overflow-hidden group">
              <img
                src={post.image}
                alt={`Styled by ${post.author}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-ivory text-sm italic mb-1">
                  "{post.caption}"
                </p>
                <p className="text-ivory/70 text-xs">
                  {post.author}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Spacer for centering */}
        <div className="hidden md:block md:w-[calc((100vw-1280px)/2)] flex-shrink-0" />
      </div>

      {/* Scroll hint for mobile */}
      <p className="md:hidden text-center text-xs text-silk mt-4">
        ← Scroll to explore →
      </p>
    </section>
  );
};

export default UGCStrip;
