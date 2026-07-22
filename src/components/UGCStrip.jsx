import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              How You Wear Velmora
            </h2>
          </div>
          <p className="hidden md:block font-sans text-sm text-white/50">
            Swipe to explore
          </p>
        </div>
      </div>

      {/* Scrollable row */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={`[ugc-${post.id}-caption] gold jewelry ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                data-strk-img-id={`ugc-post-${post.id}`}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p
                  id={`ugc-${post.id}-caption`}
                  className="font-serif text-sm md:text-base text-white italic leading-snug"
                >
                  &ldquo;{post.caption}&rdquo;
                </p>
                <p className="font-sans text-xs text-white/60 mt-1.5">{post.handle}</p>
              </div>
            </div>
          ))}
          {/* Spacer for right padding */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>
    </section>
  );
}