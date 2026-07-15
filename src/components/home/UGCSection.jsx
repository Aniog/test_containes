import React, { useEffect, useRef } from 'react';
import { ugcPosts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">@velmora</p>
          <h2 className="serif-heading text-3xl md:text-4xl">Worn & Loved</h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={post.imgId}
              data-strk-img={`[${post.captionId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p id={post.captionId} className="absolute bottom-4 left-4 right-4 serif-heading text-white text-lg italic">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
