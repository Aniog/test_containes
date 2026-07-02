import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday earring"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn on ear close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Obsessed with this necklace"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'delicate gold necklace pendant worn by woman',
  },
  {
    id: 'ugc-3',
    caption: '"Perfect gift for myself"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold ear cuff crystal jewelry editorial portrait',
  },
  {
    id: 'ugc-4',
    caption: '"Stacking these forever"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'stacked gold earrings jewelry close up woman',
  },
  {
    id: 'ugc-5',
    caption: '"Wore it to my wedding"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'elegant gold jewelry bridal portrait woman',
  },
  {
    id: 'ugc-6',
    caption: '"The quality is unreal"',
    handle: '@jade.l',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'fine gold jewelry close up detail shot',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">As Worn By You</p>
            <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-text-muted hover:text-gold transition-colors duration-300 border-b border-text-muted hover:border-gold pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div key={item.id} className="flex-shrink-0 w-44 md:w-52 relative group cursor-pointer">
            {/* 9:16 card */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p id={item.titleId} className="font-serif text-sm italic text-ivory leading-snug mb-1">
                  {item.caption}
                </p>
                <p className="font-sans text-[10px] text-ivory/60 tracking-wide">{item.handle}</p>
              </div>

              {/* Hidden desc for image query */}
              <span id={item.descId} className="hidden">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
