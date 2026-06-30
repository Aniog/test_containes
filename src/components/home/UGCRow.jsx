import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
    title: 'Gold ear cuff worn on model',
    desc: 'Vivid Aura ear cuff gold jewelry worn on ear close up',
  },
  {
    id: 'ugc-2',
    caption: '"Obsessed with this necklace"',
    handle: '@maya.k',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
    title: 'Floral crystal necklace on model',
    desc: 'Majestic Flora necklace gold jewelry worn on neck lifestyle',
  },
  {
    id: 'ugc-3',
    caption: '"Perfect gift for myself"',
    handle: '@claire.b',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
    title: 'Gold huggie earrings close up',
    desc: 'Golden Sphere huggie earrings worn on ear gold jewelry',
  },
  {
    id: 'ugc-4',
    caption: '"Stacking queen 👑"',
    handle: '@priya.r',
    imgId: 'ugc-img-4-j0k1l2',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
    title: 'Stacked gold earrings on model',
    desc: 'Multiple gold earrings stacked on ear jewelry styling',
  },
  {
    id: 'ugc-5',
    caption: '"Worth every penny"',
    handle: '@anna.w',
    imgId: 'ugc-img-5-m3n4o5',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
    title: 'Gold filigree drop earrings worn',
    desc: 'Amber Lace filigree drop earrings gold jewelry worn lifestyle',
  },
  {
    id: 'ugc-6',
    caption: '"The perfect set"',
    handle: '@luna.c',
    imgId: 'ugc-img-6-p6q7r8',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
    title: 'Gold jewelry gift set unboxing',
    desc: 'Royal Heirloom gift set gold earrings necklace jewelry box',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-200 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Worn & Loved</h2>
          </div>
          <p className="font-sans text-xs text-charcoal-muted">
            Tag us <span className="text-gold">@velmora</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scroll-hide px-6 md:px-10 pb-2">
        {ugcItems.map(item => (
          <div key={item.id} className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden bg-charcoal group cursor-pointer">
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="440"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-white leading-snug">{item.caption}</p>
              <p className="font-sans text-[10px] text-white/60 mt-1">{item.handle}</p>
            </div>

            {/* Instagram icon */}
            <div className="absolute top-3 right-3 opacity-60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
