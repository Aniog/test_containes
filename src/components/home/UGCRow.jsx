import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold earrings worn on ear model closeup' },
  { id: 'ugc-2', caption: 'Stacked & styled', query: 'gold necklace layered on model neck' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'gold huggie earrings model portrait warm light' },
  { id: 'ugc-4', caption: 'The perfect gift', query: 'gold jewelry gift box luxury unboxing' },
  { id: 'ugc-5', caption: 'Minimal & refined', query: 'gold jewelry minimalist model elegant' },
  { id: 'ugc-6', caption: 'Worn with love', query: 'gold earrings model smiling lifestyle' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-text-muted)] mb-2">@velmora on Instagram</p>
          <h2 className="section-title">Worn by You</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 sm:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden bg-[var(--velmora-border-light)]">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] ${item.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p id={`${item.id}-caption`} className="text-white text-sm font-serif-display italic px-4 pb-4">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
