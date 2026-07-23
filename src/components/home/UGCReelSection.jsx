import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { UGC_ITEMS } from '@/data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">As Worn</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-ink font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-200 hidden md:block"
          >
            Follow @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-base text-ivory italic leading-tight"
              >
                {item.caption}
              </p>
            </div>

            {/* Play icon overlay (mimics Reels) */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
