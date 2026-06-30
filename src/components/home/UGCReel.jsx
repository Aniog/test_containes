import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: 'Morning light, golden layers',
    imgId: 'ugc-reel-img-1-a1b2',
    titleId: 'ugc-reel-title-1',
    captionId: 'ugc-reel-caption-1',
    handle: '@sofia.m',
  },
  {
    id: 'reel-2',
    caption: 'The only earrings I wear now',
    imgId: 'ugc-reel-img-2-c3d4',
    titleId: 'ugc-reel-title-2',
    captionId: 'ugc-reel-caption-2',
    handle: '@amelie.j',
  },
  {
    id: 'reel-3',
    caption: 'Gift from myself, to myself',
    imgId: 'ugc-reel-img-3-e5f6',
    titleId: 'ugc-reel-title-3',
    captionId: 'ugc-reel-caption-3',
    handle: '@nadia.k',
  },
  {
    id: 'reel-4',
    caption: 'Stacked and obsessed',
    imgId: 'ugc-reel-img-4-g7h8',
    titleId: 'ugc-reel-title-4',
    captionId: 'ugc-reel-caption-4',
    handle: '@claire.b',
  },
  {
    id: 'reel-5',
    caption: 'Everyday luxury, always',
    imgId: 'ugc-reel-img-5-i9j0',
    titleId: 'ugc-reel-title-5',
    captionId: 'ugc-reel-caption-5',
    handle: '@luna.r',
  },
  {
    id: 'reel-6',
    caption: 'The necklace that started it all',
    imgId: 'ugc-reel-img-6-k1l2',
    titleId: 'ugc-reel-title-6',
    captionId: 'ugc-reel-caption-6',
    handle: '@maya.s',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">As Worn By You</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors border-b border-taupe hover:border-gold pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {reels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative group cursor-pointer"
            style={{ width: '160px', height: '284px' }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-obsidian-light"
              data-strk-bg-id={reel.imgId}
              data-strk-bg={`[${reel.captionId}] [${reel.titleId}] gold jewelry worn`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="320"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.captionId}
                className="font-serif text-sm font-light italic text-ivory leading-snug mb-1"
              >
                "{reel.caption}"
              </p>
              <p
                id={reel.titleId}
                className="font-sans text-[10px] text-gold tracking-wider"
              >
                {reel.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-ivory/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
