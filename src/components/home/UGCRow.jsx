import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCRow = () => {
  const containerRef = useRef(null);
  const reels = [
    { id: 1, title: 'Morning routine', handle: '@sophia.m' },
    { id: 2, title: 'Date night look', handle: '@emma.l' },
    { id: 3, title: 'Office glam', handle: '@olivia.r' },
    { id: 4, title: 'Weekend vibes', handle: '@ava.k' },
    { id: 5, title: 'Gift unboxing', handle: '@mia.j' },
  ];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-surface">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="section-title">As Seen On</h2>
          <p className="mt-3 text-brand-muted text-sm md:text-base">Real moments, real style.</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-40 md:w-48 snap-center"
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-brand-warm shadow-card">
                <img
                  data-strk-img-id={`reel-${reel.id}-velmora`}
                  data-strk-img={`[reel-title-${reel.id}] [reel-handle-${reel.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl">
                <p id={`reel-title-${reel.id}`} className="font-serif text-xs text-white">{reel.title}</p>
                <p id={`reel-handle-${reel.id}`} className="text-[10px] text-white/80 mt-0.5">{reel.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
