import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-reel-1-a1b2c3', titleId: 'ugc-1-title', caption: 'The Vivid Aura cuff — my everyday essential', handle: '@maya.wears' },
  { id: 'ugc-2', imgId: 'ugc-reel-2-d4e5f6', titleId: 'ugc-2-title', caption: 'Stacked and obsessed with the Huggies', handle: '@sophiajewels' },
  { id: 'ugc-3', imgId: 'ugc-reel-3-g7h8i9', titleId: 'ugc-3-title', caption: 'Flora Nectar for date night ✨', handle: '@elenarose' },
  { id: 'ugc-4', imgId: 'ugc-reel-4-j1k2l3', titleId: 'ugc-4-title', caption: 'Gifted the Heirloom Set to my sister', handle: '@claire.m' },
  { id: 'ugc-5', imgId: 'ugc-reel-5-m4n5o6', titleId: 'ugc-5-title', caption: 'Amber Lace for the office, always', handle: '@nadia.style' },
  { id: 'ugc-6', imgId: 'ugc-reel-6-p7q8r9', titleId: 'ugc-6-title', caption: 'Gold stacking is my love language', handle: '@isabelle.k' },
];

const UGCReelsRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-velmora-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <p className="hidden md:block font-inter text-xs tracking-[0.1em] uppercase text-velmora-muted">
            #VelmoraJewelry
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-ugc overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-velmora-cream leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p className="font-inter text-[10px] tracking-[0.08em] text-velmora-gold/80">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReelsRow;
