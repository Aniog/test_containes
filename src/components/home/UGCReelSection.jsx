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
    <section className="py-16 lg:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-velmora-obsidian">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-manrope text-xs tracking-widest uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors border-b border-velmora-border pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcReels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '180px', scrollSnapAlign: 'start' }}
          >
            {/* 9:16 aspect ratio container */}
            <div className="relative bg-velmora-obsidian" style={{ aspectRatio: '9/16' }}>
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="360"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  id={reel.titleId}
                  className="font-cormorant text-sm italic leading-tight"
                  style={{ color: '#FAF7F2' }}
                >
                  {reel.caption}
                </p>
                <p
                  id={reel.descId}
                  className="font-manrope text-[10px] mt-1 tracking-wide"
                  style={{ color: 'rgba(250,247,242,0.6)' }}
                >
                  {reel.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
