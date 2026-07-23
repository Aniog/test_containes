import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">Community</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              As Worn by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-stone hover:text-gold transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden md:inline">@velmora</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2"
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 group cursor-pointer"
          >
            {/* 9:16 aspect ratio card */}
            <div className="relative overflow-hidden bg-obsidian" style={{ aspectRatio: '9/16' }}>
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry worn woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  id={item.titleId}
                  className="font-cormorant text-sm italic text-ivory leading-tight mb-1"
                >
                  {item.caption}
                </p>
                <p
                  id={item.descId}
                  className="font-manrope text-[10px] text-ivory/60 uppercase tracking-widest"
                >
                  {item.username}
                </p>
              </div>

              {/* Instagram icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Instagram className="w-4 h-4 text-ivory/80" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
