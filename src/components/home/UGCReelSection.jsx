import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reelItems = [
  {
    id: 'reel-1',
    caption: 'Morning light, golden details',
    imgId: 'reel-img-1-a1b2c3',
    titleId: 'reel-title-1',
    captionId: 'reel-caption-1',
  },
  {
    id: 'reel-2',
    caption: 'Stack your story',
    imgId: 'reel-img-2-d4e5f6',
    titleId: 'reel-title-2',
    captionId: 'reel-caption-2',
  },
  {
    id: 'reel-3',
    caption: 'Effortless every day',
    imgId: 'reel-img-3-g7h8i9',
    titleId: 'reel-title-3',
    captionId: 'reel-caption-3',
  },
  {
    id: 'reel-4',
    caption: 'The art of layering',
    imgId: 'reel-img-4-j1k2l3',
    titleId: 'reel-title-4',
    captionId: 'reel-caption-4',
  },
  {
    id: 'reel-5',
    caption: 'Worn with intention',
    imgId: 'reel-img-5-m4n5o6',
    titleId: 'reel-title-5',
    captionId: 'reel-caption-5',
  },
  {
    id: 'reel-6',
    caption: 'Golden hour glow',
    imgId: 'reel-img-6-p7q8r9',
    titleId: 'reel-title-6',
    captionId: 'reel-caption-6',
  },
];

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">
              @velmora
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors border-b border-divider pb-0.5 hidden md:block"
          >
            Follow Us →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-2">
        {reelItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] woman wearing gold jewelry portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-cream/90 leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 border border-cream/60 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-cream/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
