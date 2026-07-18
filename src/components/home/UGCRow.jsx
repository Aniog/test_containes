import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-base overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
          Styled by You
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group"
          >
            <img
              alt={post.caption}
              className="w-full h-full object-cover"
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}] gold jewelry ear neck model warm light`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p id={`ugc-caption-${post.id}`} className="font-serif text-base text-white italic">
                {post.caption}
              </p>
              <p className="text-xs text-white/70 mt-1">by {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
