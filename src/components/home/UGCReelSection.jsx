import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const REELS = [
  { id: 'reel-1', caption: 'Effortless shine, every day.' },
  { id: 'reel-2', caption: 'Layered in gold.' },
  { id: 'reel-3', caption: 'Tiny details, big moments.' },
  { id: 'reel-4', caption: 'Self-gift season.' },
  { id: 'reel-5', caption: 'Quiet luxury.' },
  { id: 'reel-6', caption: 'Made to mix & match.' },
];

export function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-label text-accent mb-3">@velmora</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">How You Wear Velmora</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4">
        {REELS.map((reel, index) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] snap-start overflow-hidden group"
          >
            <img
              alt={`Customer style ${index + 1}`}
              data-strk-img-id={reel.id}
              data-strk-img={`[reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-white leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
