import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-img-4a2b8c',
    titleId: 'ugc-reel-1-title',
    descId: 'ugc-reel-1-desc',
    caption: 'My everyday stack',
    sub: 'Golden Sphere Huggies',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-img-5d3e9f',
    titleId: 'ugc-reel-2-title',
    descId: 'ugc-reel-2-desc',
    caption: 'The perfect gift',
    sub: 'Royal Heirloom Set',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-img-6f4a1b',
    titleId: 'ugc-reel-3-title',
    descId: 'ugc-reel-3-desc',
    caption: 'Layered & effortless',
    sub: 'Majestic Flora Nectar',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-img-7b5c2d',
    titleId: 'ugc-reel-4-title',
    descId: 'ugc-reel-4-desc',
    caption: 'Ear candy obsession',
    sub: 'Vivid Aura Jewels',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-img-8c6d3e',
    titleId: 'ugc-reel-5-title',
    descId: 'ugc-reel-5-desc',
    caption: 'Date night ready',
    sub: 'Amber Lace Earrings',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-img-9d7e4f',
    titleId: 'ugc-reel-6-title',
    descId: 'ugc-reel-6-desc',
    caption: 'Gifted myself',
    sub: 'Golden Sphere Huggies',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs text-pebble tracking-widest uppercase hover:text-gold transition-colors border-b border-pebble pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-base italic leading-tight mb-1">
                "{reel.caption}"
              </p>
              <p
                id={reel.titleId}
                className="font-sans text-[10px] text-white/60 tracking-widest uppercase"
              >
                {reel.sub}
              </p>
              <p id={reel.descId} className="sr-only">{reel.caption} {reel.sub} gold jewelry</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
