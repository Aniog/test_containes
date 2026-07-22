import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-a1b2c3',
    caption: '"My everyday gold"',
    user: '@sofiamartin',
    titleId: 'reel-1-title',
    descId: 'reel-1-desc',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-d4e5f6',
    caption: '"Perfect gift for her"',
    user: '@emmawilson',
    titleId: 'reel-2-title',
    descId: 'reel-2-desc',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-g7h8i9',
    caption: '"Obsessed with these huggies"',
    user: '@clairedumont',
    titleId: 'reel-3-title',
    descId: 'reel-3-desc',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-j1k2l3',
    caption: '"Stacking all day"',
    user: '@isabellachen',
    titleId: 'reel-4-title',
    descId: 'reel-4-desc',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-m4n5o6',
    caption: '"Gifted myself, no regrets"',
    user: '@natalierosse',
    titleId: 'reel-5-title',
    descId: 'reel-5-desc',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-p7q8r9',
    caption: '"Wear it everywhere"',
    user: '@lunamoreau',
    titleId: 'reel-6-title',
    descId: 'reel-6-desc',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-blush overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian tracking-wide">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-champagne transition-colors border-b border-stone/30 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.descId}
                className="font-cormorant text-sm italic text-ivory leading-tight"
              >
                {reel.caption}
              </p>
              <p id={reel.titleId} className="font-inter text-[10px] text-ivory/60 mt-1">
                {reel.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
