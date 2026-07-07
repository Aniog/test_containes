import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour, golden ears',
    handle: '@sofiarenata',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'My everyday stack',
    handle: '@miaelise_',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'The necklace I never take off',
    handle: '@lunavibes',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gift from my best friend ✨',
    handle: '@clairedumont',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Brunch ready',
    handle: '@natalierose',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Layering season',
    handle: '@emmavoss',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-velmora-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors self-start md:self-auto"
          >
            @velmora on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scroll-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden bg-velmora-obsidian">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] gold jewelry worn woman portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-serif italic text-sm text-velmora-ivory leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="text-[10px] font-sans text-velmora-gold uppercase tracking-widest"
              >
                {item.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
