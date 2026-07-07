import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-img-r1a2b3',
    titleId: 'ugc-reel-title-1',
    descId: 'ugc-reel-desc-1',
    caption: 'My everyday stack',
    handle: '@sofia.m',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-img-r4c5d6',
    titleId: 'ugc-reel-title-2',
    descId: 'ugc-reel-desc-2',
    caption: 'The perfect gift',
    handle: '@amelie.k',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-img-r7e8f9',
    titleId: 'ugc-reel-title-3',
    descId: 'ugc-reel-desc-3',
    caption: 'Ear party goals',
    handle: '@luna.v',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-img-r2g3h4',
    titleId: 'ugc-reel-title-4',
    descId: 'ugc-reel-desc-4',
    caption: 'Layered & loving it',
    handle: '@claire.b',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-img-r5i6j7',
    titleId: 'ugc-reel-title-5',
    descId: 'ugc-reel-desc-5',
    caption: 'Golden hour vibes',
    handle: '@nadia.r',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-img-r8k9l0',
    titleId: 'ugc-reel-title-6',
    descId: 'ugc-reel-desc-6',
    caption: 'Treat yourself',
    handle: '@maya.s',
  },
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
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 border-b border-stone pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={reel.titleId} className="sr-only">{reel.caption}</span>
            <span id={reel.descId} className="sr-only">gold jewelry worn on model ear neck close up</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-ivory italic leading-tight">{reel.caption}</p>
              <p className="font-sans text-[10px] text-ivory/60 mt-1 tracking-wide">{reel.handle}</p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
