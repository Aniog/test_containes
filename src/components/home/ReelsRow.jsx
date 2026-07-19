import React, { useRef, useEffect } from 'react';
import { StockImage } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Morning light' },
  { id: 'reel-2', caption: 'Date night' },
  { id: 'reel-3', caption: 'Layered up' },
  { id: 'reel-4', caption: 'Gift moment' },
  { id: 'reel-5', caption: 'Everyday gold' },
  { id: 'reel-6', caption: 'New favorite' },
];

export default function ReelsRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">@velmorajewelry</p>
        <h2 className="font-serif text-3xl font-light md:text-4xl">Follow the Glow</h2>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto px-4 pb-4 sm:gap-4 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative h-[360px] w-[200px] flex-shrink-0 overflow-hidden bg-surface-2 sm:h-[420px] sm:w-[240px]"
          >
            <StockImage
              id={`reel-img-${reel.id}`}
              query={`[reel-caption-${reel.id}]`}
              ratio="9x16"
              width="400"
              alt={reel.caption}
              className="h-full w-full"
              containerRef={containerRef}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
