import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-14 md:py-20 bg-velmora-sand overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-2">Community</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">Styled by You</h2>
          </div>
          <span className="text-xs text-velmora-warmgray hidden md:block">Scroll to explore</span>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={post.id}
              data-strk-img={`[ugc-caption-${post.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${post.id}`}
              className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm md:text-base italic leading-snug"
            >
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
