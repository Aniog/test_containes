import React, { useRef } from 'react';
import { ugcPosts } from '@/data/products';

const UGCReel = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 lg:py-28 bg-velmora-creamDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            Styled by You
          </h2>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[220px] md:w-[260px] snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic leading-snug">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
