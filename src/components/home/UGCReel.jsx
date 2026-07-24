import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reelItems = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-a1b2c3',
    caption: 'My everyday stack',
    sub: 'Golden Sphere Huggies',
    titleId: 'reel-1-title',
    captionId: 'reel-1-caption',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-d4e5f6',
    caption: 'The perfect gift',
    sub: 'Royal Heirloom Set',
    titleId: 'reel-2-title',
    captionId: 'reel-2-caption',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-g7h8i9',
    caption: 'Collarbone goals',
    sub: 'Majestic Flora Nectar',
    titleId: 'reel-3-title',
    captionId: 'reel-3-caption',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-j1k2l3',
    caption: 'Ear party ✨',
    sub: 'Vivid Aura Jewels',
    titleId: 'reel-4-title',
    captionId: 'reel-4-caption',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-m4n5o6',
    caption: 'Date night ready',
    sub: 'Amber Lace Earrings',
    titleId: 'reel-5-title',
    captionId: 'reel-5-caption',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-p7q8r9',
    caption: 'Gifted myself',
    sub: 'Golden Sphere Huggies',
    titleId: 'reel-6-title',
    captionId: 'reel-6-caption',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-cream tracking-wide">
              Real Women, Real Jewelry
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs font-medium tracking-[0.15em] uppercase text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-cream/20 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reelItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '160px', aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="320"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-serif text-sm font-light italic text-velmora-cream leading-tight"
              >
                {item.caption}
              </p>
              <p
                id={item.titleId}
                className="font-sans text-[9px] font-medium tracking-widest uppercase text-velmora-gold mt-1"
              >
                {item.sub}
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-2 right-2 opacity-60">
              <div className="w-4 h-4 border border-velmora-cream/60 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-velmora-cream/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
