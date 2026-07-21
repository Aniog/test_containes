import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: '"My everyday earring"',
    user: '@sofiamartin',
    titleId: 'reel-1-title',
    descId: 'reel-1-desc',
    imgId: 'ugc-reel-1-a1b2c3',
  },
  {
    id: 'reel-2',
    caption: '"The perfect gift"',
    user: '@emmawilson',
    titleId: 'reel-2-title',
    descId: 'reel-2-desc',
    imgId: 'ugc-reel-2-d4e5f6',
  },
  {
    id: 'reel-3',
    caption: '"Obsessed with this necklace"',
    user: '@clairedumont',
    titleId: 'reel-3-title',
    descId: 'reel-3-desc',
    imgId: 'ugc-reel-3-g7h8i9',
  },
  {
    id: 'reel-4',
    caption: '"Stacking goals ✨"',
    user: '@isabellachen',
    titleId: 'reel-4-title',
    descId: 'reel-4-desc',
    imgId: 'ugc-reel-4-j1k2l3',
  },
  {
    id: 'reel-5',
    caption: '"Worth every penny"',
    user: '@natalierosse',
    titleId: 'reel-5-title',
    descId: 'reel-5-desc',
    imgId: 'ugc-reel-5-m4n5o6',
  },
  {
    id: 'reel-6',
    caption: '"Gifted myself, no regrets"',
    user: '@laurabennett',
    titleId: 'reel-6-title',
    descId: 'reel-6-desc',
    imgId: 'ugc-reel-6-p7q8r9',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
              Worn & Loved
            </h2>
          </div>
          <p className="font-manrope text-xs text-velmora-mist hidden md:block">
            #VelmoraJewelry
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-36 md:w-44 aspect-reel overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query context */}
            <span id={reel.titleId} className="sr-only">gold jewelry worn on model</span>
            <span id={reel.descId} className="sr-only">woman wearing gold earrings necklace jewelry close-up portrait</span>

            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-velmora-cream leading-tight">
                {reel.caption}
              </p>
              <p className="font-manrope text-[9px] text-velmora-cream/60 mt-0.5 tracking-wide">
                {reel.user}
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
};

export default UGCReel;
