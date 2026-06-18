import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="scroll-snap-item flex-shrink-0 w-44 md:w-52 relative overflow-hidden group">
      {/* 9:16 aspect ratio card */}
      <div className="relative aspect-[9/16] overflow-hidden bg-linen">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.titleId}] gold jewelry worn close up portrait`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(26,23,20,0.75) 0%, transparent 55%)'}} />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.titleId}
            className="font-cormorant text-sm italic font-light text-ivory leading-snug"
          >
            {item.caption}
          </p>
        </div>

        {/* Instagram-style play indicator */}
        <div className="absolute top-3 right-3 opacity-60">
          <div className="w-5 h-5 rounded-full border border-ivory flex items-center justify-center">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-ivory ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide">
              Real Women, Real Jewelry
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-muted hover:text-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="pl-4 md:pl-8 max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-snap-x pb-2">
          {ugcItems.map(item => (
            <UGCCard key={item.id} item={item} />
          ))}
          {/* Follow CTA card */}
          <div className="scroll-snap-item flex-shrink-0 w-44 md:w-52">
            <div className="aspect-[9/16] bg-obsidian flex flex-col items-center justify-center gap-4 p-6">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="text-gold text-lg font-cormorant">+</span>
              </div>
              <p className="font-cormorant text-sm italic text-ivory text-center leading-snug">
                Follow us for daily inspiration
              </p>
              <a
                href="#"
                className="font-manrope text-[10px] tracking-[0.12em] uppercase text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-ivory transition-colors"
              >
                @velmora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
