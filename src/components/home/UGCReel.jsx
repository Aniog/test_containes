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
    desc: 'gold huggie earrings worn on ear close up',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted myself this"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold necklace worn on neck woman',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with the quality"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold ear cuff crystal jewelry close up',
  },
  {
    id: 'ugc-4',
    caption: '"Perfect for layering"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'layered gold necklaces woman wearing jewelry',
  },
  {
    id: 'ugc-5',
    caption: '"The best gift ever"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'gold jewelry gift box elegant',
  },
  {
    id: 'ugc-6',
    caption: '"Wear it every day"',
    handle: '@luna.b',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'gold drop earrings filigree worn woman',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">Worn & Loved</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-ink transition-colors border-b border-velmora-muted pb-0.5 hidden md:block"
          >
            @velmorajewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden"
            style={{ width: '180px', aspectRatio: '9/16', scrollSnapAlign: 'start' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="360"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Hidden text refs */}
            <span id={item.titleId} className="hidden">{item.caption}</span>
            <span id={item.descId} className="hidden">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-white leading-tight">{item.caption}</p>
              <p className="font-sans text-[10px] text-white/60 mt-1 tracking-wider">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
