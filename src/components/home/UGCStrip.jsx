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
    title: 'Gold ear cuff worn daily',
    desc: 'Woman wearing gold ear cuff jewelry close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift for her"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    title: 'Floral necklace gift',
    desc: 'Woman wearing delicate gold floral necklace elegant portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    title: 'Gold huggie earrings close up',
    desc: 'Close up ear wearing gold huggie earrings jewelry',
  },
  {
    id: 'ugc-4',
    caption: '"Wore this to my wedding"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    title: 'Bridal gold jewelry',
    desc: 'Bride wearing gold jewelry earrings necklace elegant',
  },
  {
    id: 'ugc-5',
    caption: '"Stacks so beautifully"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    title: 'Gold jewelry stack',
    desc: 'Woman stacking gold jewelry earrings necklace layered look',
  },
  {
    id: 'ugc-6',
    caption: '"Worth every penny"',
    handle: '@leila.b',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    title: 'Luxury gold jewelry portrait',
    desc: 'Elegant woman wearing gold jewelry luxury portrait close up',
  },
];

export default function UGCStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-2">As Worn By You</p>
            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-obsidian">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs tracking-[0.12em] uppercase text-stone hover:text-obsidian transition-colors underline-offset-4 hover:underline"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2"
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-ivory leading-tight mb-1">
                {item.caption}
              </p>
              <p className="font-inter text-[10px] tracking-wide text-ivory/60">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
