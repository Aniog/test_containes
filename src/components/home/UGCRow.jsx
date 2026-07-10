import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour, golden ears.',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
  },
  {
    id: 'ugc-2',
    caption: 'Stacked and effortless.',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
  },
  {
    id: 'ugc-3',
    caption: 'The necklace that started it all.',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
  },
  {
    id: 'ugc-4',
    caption: 'Everyday luxury.',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
  },
  {
    id: 'ugc-5',
    caption: 'Gifted with love.',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
  },
  {
    id: 'ugc-6',
    caption: 'Worn daily, treasured always.',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            {/* Caption */}
            <p
              id={item.titleId}
              className="absolute bottom-4 left-3 right-3 font-cormorant text-sm italic text-white leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
