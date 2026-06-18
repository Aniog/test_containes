import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', imgId: 'ugc-reel-1-img-a1b2', caption: '"My everyday earrings"', handle: '@sofia.m', titleId: 'reel-1-title', descId: 'reel-1-desc' },
  { id: 'reel-2', imgId: 'ugc-reel-2-img-c3d4', caption: '"Perfect gift for her"', handle: '@claire.w', titleId: 'reel-2-title', descId: 'reel-2-desc' },
  { id: 'reel-3', imgId: 'ugc-reel-3-img-e5f6', caption: '"Obsessed with these huggies"', handle: '@maya.r', titleId: 'reel-3-title', descId: 'reel-3-desc' },
  { id: 'reel-4', imgId: 'ugc-reel-4-img-g7h8', caption: '"Wore it to my wedding"', handle: '@anna.k', titleId: 'reel-4-title', descId: 'reel-4-desc' },
  { id: 'reel-5', imgId: 'ugc-reel-5-img-i9j0', caption: '"Stacks so beautifully"', handle: '@priya.s', titleId: 'reel-5-title', descId: 'reel-5-desc' },
  { id: 'reel-6', imgId: 'ugc-reel-6-img-k1l2', caption: '"Gifted to my sister"', handle: '@emma.t', titleId: 'reel-6-title', descId: 'reel-6-desc' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">As Seen On</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">Worn & Loved</h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-bark border-b border-bark pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '160px', aspectRatio: '9/16' }}
          >
            {/* Hidden text for image query */}
            <span id={reel.titleId} className="sr-only">Gold jewelry worn on model ear neck</span>
            <span id={reel.descId} className="sr-only">Velmora fine jewelry lifestyle photo</span>

            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="320"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-cream leading-snug">{reel.caption}</p>
              <p className="font-manrope text-[10px] text-cream/60 mt-1">{reel.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
