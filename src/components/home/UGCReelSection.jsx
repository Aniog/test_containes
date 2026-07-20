import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">As Seen On</p>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-charcoal">
              Worn & Loved
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors hidden md:block"
          >
            @velmora_jewelry →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcReels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Hidden text for image query */}
            <span id={reel.titleId} className="sr-only">{reel.titleText}</span>
            <span id={reel.descId} className="sr-only">{reel.descText}</span>

            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant italic text-ivory text-sm leading-tight mb-1">
                {reel.caption}
              </p>
              <p className="font-inter text-xs text-ivory/60">{reel.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
