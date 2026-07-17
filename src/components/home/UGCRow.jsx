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
    desc: 'gold huggie earrings worn on ear close up editorial',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted to myself"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold necklace worn on neck woman portrait warm light',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with this set"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold earring and necklace set worn jewelry editorial',
  },
  {
    id: 'ugc-4',
    caption: '"Stacking perfection"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j0k1l2',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'stacked gold ear cuffs and huggies close up',
  },
  {
    id: 'ugc-5',
    caption: '"Worth every penny"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m3n4o5',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'gold filigree drop earrings worn woman portrait',
  },
  {
    id: 'ugc-6',
    caption: '"My go-to gift"',
    handle: '@emma.l',
    imgId: 'ugc-img-6-p6q7r8',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'gold jewelry gift box luxury presentation',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-obsidian py-16 md:py-20 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.16em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ivory">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs uppercase tracking-[0.12em] text-ivory/50 border-b border-ivory/20 pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-ivory leading-tight mb-0.5">
                {item.caption}
              </p>
              <p className="font-manrope text-[10px] text-ivory/50 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
