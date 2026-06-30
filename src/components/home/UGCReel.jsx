import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday staple"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a8f2',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    title: 'Gold ear cuff worn',
    desc: 'woman wearing gold ear cuff jewelry close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift for her"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-b3c4',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    title: 'Gold necklace worn',
    desc: 'woman wearing gold necklace pendant jewelry portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-d5e6',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    title: 'Gold huggie earrings worn',
    desc: 'woman wearing gold huggie hoop earrings close up ear',
  },
  {
    id: 'ugc-4',
    caption: '"Stacking these daily"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-f7g8',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    title: 'Gold jewelry stack',
    desc: 'woman stacking gold jewelry earrings necklace editorial',
  },
  {
    id: 'ugc-5',
    caption: '"Arrived so beautifully packaged"',
    handle: '@jade.l',
    imgId: 'ugc-img-5-h9i0',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    title: 'Jewelry gift box',
    desc: 'luxury gold jewelry gift box packaging unboxing',
  },
  {
    id: 'ugc-6',
    caption: '"Wearing it everywhere"',
    handle: '@nina.b',
    imgId: 'ugc-img-6-j1k2',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    title: 'Gold drop earrings worn',
    desc: 'woman wearing gold drop earrings filigree portrait editorial',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="pt-16 pb-10 md:pt-20 md:pb-12 bg-parchment" style={{ overflowX: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors border-b border-stone/40 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scroll-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 rounded-sm overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-cream leading-snug mb-1">
                {item.caption}
              </p>
              <p className="font-sans text-xs text-velvet-300">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
