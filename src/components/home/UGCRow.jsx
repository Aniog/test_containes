import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Morning light, golden glow',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn close up ear',
  },
  {
    id: 'ugc-2',
    caption: 'Layered & effortless',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold necklace layered neck jewelry',
  },
  {
    id: 'ugc-3',
    caption: 'The everyday essential',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold ear cuff crystal earring portrait',
  },
  {
    id: 'ugc-4',
    caption: 'Gift her something real',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'jewelry gift box gold earrings necklace',
  },
  {
    id: 'ugc-5',
    caption: 'Quiet luxury, every day',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'gold drop earrings filigree woman portrait',
  },
  {
    id: 'ugc-6',
    caption: 'Stack it your way',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'stacked gold earrings ear multiple piercings',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors font-medium"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer">
      {/* Image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="300"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.caption}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm italic text-ivory leading-snug">
          {item.caption}
        </p>
      </div>
    </div>
  );
}
