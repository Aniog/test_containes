import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    caption: 'My everyday ear stack',
    subcaption: 'Vivid Aura + Golden Sphere',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    caption: 'The perfect gift',
    subcaption: 'Royal Heirloom Set',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    caption: 'Layered & luminous',
    subcaption: 'Majestic Flora Nectar',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Golden hour glow',
    subcaption: 'Amber Lace Earrings',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Minimal & modern',
    subcaption: 'Golden Sphere Huggies',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'Brunch to dinner',
    subcaption: 'Vivid Aura Jewels',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors duration-300 border-b border-taupe-light pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 lg:px-16 pb-2"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}] [ugc-section-title]`}
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
              <p id={item.titleId} className="font-serif text-sm italic text-ivory leading-tight">
                {item.caption}
              </p>
              <p id={item.descId} className="font-sans text-[10px] uppercase tracking-widest text-gold mt-1">
                {item.subcaption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
