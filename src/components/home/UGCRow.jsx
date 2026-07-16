import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold jewelry worn on ear closeup' },
  { id: 'ugc-2', caption: 'Stacked & styled', query: 'layered gold necklaces woman' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'gold huggie earrings portrait' },
  { id: 'ugc-4', caption: 'The perfect gift', query: 'jewelry gift box gold necklace' },
  { id: 'ugc-5', caption: 'Minimal & refined', query: 'minimal gold ear cuff woman' },
  { id: 'ugc-6', caption: 'Weekend vibes', query: 'gold jewelry flatlay aesthetic' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-[var(--velmora-bg-secondary)] overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-secondary)] mb-2">@velmora on Instagram</p>
        <h2 className="serif-heading text-2xl md:text-3xl text-[var(--velmora-text)]">Worn & Loved</h2>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-[var(--velmora-border-light)] overflow-hidden rounded-sm">
              <img
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 serif-heading text-white text-sm italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
