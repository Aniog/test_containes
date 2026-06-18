import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    title: 'Gold huggie earrings worn daily',
    desc: 'Woman wearing gold huggie earrings close up ear portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    title: 'Gold necklace gift unboxing',
    desc: 'Woman wearing delicate gold necklace elegant portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    title: 'Crystal ear cuff styled look',
    desc: 'Close up ear with crystal ear cuff gold jewelry editorial',
  },
  {
    id: 'ugc-4',
    caption: '"Stacking goals"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    title: 'Earring stack gold jewelry',
    desc: 'Woman stacking multiple gold earrings ear portrait',
  },
  {
    id: 'ugc-5',
    caption: '"Wear it everywhere"',
    handle: '@jade.l',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    title: 'Gold filigree drop earrings',
    desc: 'Woman wearing gold drop earrings outdoor portrait warm light',
  },
  {
    id: 'ugc-6',
    caption: '"Gifted myself"',
    handle: '@priya.s',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    title: 'Jewelry gift set unboxing',
    desc: 'Luxury jewelry gift box gold earrings necklace set',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-manrope text-xs font-medium tracking-widest uppercase text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs font-medium tracking-widest uppercase text-mist hover:text-gold transition-colors duration-300 flex items-center gap-2 self-start md:self-auto"
          >
            @velmora.jewelry
            <span className="w-8 h-px bg-current inline-block" />
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-base font-light italic text-parchment leading-tight">
                {item.caption}
              </p>
              <p className="font-manrope text-[10px] text-parchment/60 mt-1 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
