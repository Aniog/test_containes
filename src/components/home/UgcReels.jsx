import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UgcReels() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-2">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-dark">
              Styled by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider uppercase text-taupe hover:text-gold transition-colors hidden md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 pb-2 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcPosts.map((post) => {
          const captionId = `ugc-caption-${post.id}`;
          return (
            <div
              key={post.id}
              className="relative shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden rounded-sm group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[${captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer style"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <p
                id={captionId}
                className="absolute bottom-3 left-3 right-3 font-serif text-sm text-cream italic leading-snug"
              >
                {post.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
