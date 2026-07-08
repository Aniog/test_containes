import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday staple"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    titleText: 'Gold huggie earrings worn on ear',
    descText: 'Woman wearing gold huggie earrings close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted this to my sister"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    titleText: 'Gold necklace worn on neck',
    descText: 'Woman wearing delicate gold necklace editorial portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Worth every penny"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    titleText: 'Gold ear cuff crystal earring',
    descText: 'Close up of gold ear cuff with crystal on woman ear',
  },
  {
    id: 'ugc-4',
    caption: '"Obsessed with this set"',
    handle: '@priya.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    titleText: 'Gold jewelry set earrings necklace',
    descText: 'Woman wearing matching gold earrings and necklace set',
  },
  {
    id: 'ugc-5',
    caption: '"Wore it to my wedding"',
    handle: '@anna.b',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    titleText: 'Bridal gold drop earrings',
    descText: 'Bride wearing elegant gold drop earrings close up',
  },
  {
    id: 'ugc-6',
    caption: '"Stacks perfectly"',
    handle: '@leila.s',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    titleText: 'Stacked gold earrings multiple piercings',
    descText: 'Woman with multiple gold earrings stacked ear styling',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Community</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-ink font-light">As Worn By You</h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-widest uppercase text-ink-muted border-b border-ink-muted pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image queries */}
            <span id={item.titleId} className="sr-only">{item.titleText}</span>
            <span id={item.descId} className="sr-only">{item.descText}</span>

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.titleText}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm text-cream italic leading-tight">{item.caption}</p>
              <p className="font-manrope text-[10px] text-cream/60 mt-0.5">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
