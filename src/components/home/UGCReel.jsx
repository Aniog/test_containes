import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { ugcPosts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">@velmorajewelry</p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink">Styled by You</h2>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-2"
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] relative rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`UGC ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p
                id={`ugc-caption-${post.id}`}
                className="text-warm-white text-xs md:text-sm font-serif italic leading-snug"
              >
                {post.caption}
              </p>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-4 h-4 text-warm-white fill-warm-white/60" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
