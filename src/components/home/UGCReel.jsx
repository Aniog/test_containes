import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-img-1-a1b2c3',
    caption: '"My everyday gold"',
    handle: '@sofia.m',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    titleText: 'Gold ear cuff worn close up',
    descText: 'Woman wearing gold jewelry earrings close up portrait',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-img-2-d4e5f6',
    caption: '"Perfect gift for her"',
    handle: '@claire.w',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    titleText: 'Floral necklace worn on neck',
    descText: 'Woman wearing gold necklace jewelry portrait',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-img-3-g7h8i9',
    caption: '"Obsessed with these huggies"',
    handle: '@maya.r',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    titleText: 'Huggie earrings close up ear',
    descText: 'Close up of gold huggie earrings on ear',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-img-4-j1k2l3',
    caption: '"Wore it to my wedding"',
    handle: '@anna.b',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    titleText: 'Elegant gold jewelry bridal',
    descText: 'Elegant woman wearing gold jewelry bridal portrait',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-img-5-m4n5o6',
    caption: '"Stacks so beautifully"',
    handle: '@priya.k',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    titleText: 'Stacked gold jewelry layered',
    descText: 'Woman with layered stacked gold jewelry necklaces',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-img-6-p7q8r9',
    caption: '"Worth every penny"',
    handle: '@leila.s',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    titleText: 'Gold drop earrings filigree',
    descText: 'Close up gold filigree drop earrings worn',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors duration-200"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.titleText}</span>
            <span id={item.descId} className="sr-only">{item.descText}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.titleText}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-ivory leading-tight mb-1">
                {item.caption}
              </p>
              <p className="font-manrope text-[10px] text-ivory/60 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
