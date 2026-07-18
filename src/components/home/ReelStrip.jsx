import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', textId: 'reel-text-1' },
  { id: 'reel-2', caption: 'Layered love', textId: 'reel-text-2' },
  { id: 'reel-3', caption: 'Statement pieces', textId: 'reel-text-3' },
  { id: 'reel-4', caption: 'Gift ready', textId: 'reel-text-4' },
  { id: 'reel-5', caption: 'Minimal chic', textId: 'reel-text-5' },
  { id: 'reel-6', caption: 'Evening glow', textId: 'reel-text-6' },
];

export default function ReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="font-serif text-2xl md:text-3xl">Styled by You</h2>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {reels.map((reel) => (
          <div key={reel.id} className="relative shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer">
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.textId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={reel.textId}
              className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm md:text-base italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
