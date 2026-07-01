import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold"',
    handle: '@sofia.m',
    imgId: 'ugc-reel-1-a1b2c3',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
    desc: 'gold huggie earrings worn on ear close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted myself this"',
    handle: '@claire.w',
    imgId: 'ugc-reel-2-d4e5f6',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
    desc: 'gold necklace worn on neck woman portrait lifestyle',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with the quality"',
    handle: '@maya.r',
    imgId: 'ugc-reel-3-g7h8i9',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
    desc: 'gold ear cuff crystal earring close up editorial',
  },
  {
    id: 'ugc-4',
    caption: '"Perfect for layering"',
    handle: '@anna.k',
    imgId: 'ugc-reel-4-j1k2l3',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
    desc: 'layered gold necklaces woman lifestyle fashion',
  },
  {
    id: 'ugc-5',
    caption: '"The best gift ever"',
    handle: '@priya.s',
    imgId: 'ugc-reel-5-m4n5o6',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
    desc: 'gold jewelry gift box earrings necklace set',
  },
  {
    id: 'ugc-6',
    caption: '"Wear it every day"',
    handle: '@luna.b',
    imgId: 'ugc-reel-6-p7q8r9',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
    desc: 'gold drop earrings filigree woman portrait warm light',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">As Seen On</p>
            <h2 className="font-serif text-2xl md:text-3xl text-obsidian font-light">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors border-b border-muted/30 pb-0.5"
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
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-ivory leading-tight mb-1">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-ivory/60 tracking-wide">
                {item.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-ivory border-b-[4px] border-b-transparent ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
