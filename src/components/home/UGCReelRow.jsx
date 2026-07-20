import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-img-a3f2b1',
    titleId: 'ugc-reel-1-title',
    caption: 'The perfect everyday ear stack',
    handle: '@sofiamartin',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-img-b7c4d8',
    titleId: 'ugc-reel-2-title',
    caption: 'Gifted myself the Heirloom Set 💛',
    handle: '@emmawilliams',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-img-c1e5f9',
    titleId: 'ugc-reel-3-title',
    caption: 'These huggies never leave my ears',
    handle: '@isabellachen',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-img-d6a2b4',
    titleId: 'ugc-reel-4-title',
    caption: 'Layering necklaces done right ✨',
    handle: '@natalierose',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-img-e9c3f7',
    titleId: 'ugc-reel-5-title',
    caption: 'My go-to for date night jewelry',
    handle: '@oliviajames',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-img-f4d8a1',
    titleId: 'ugc-reel-6-title',
    caption: 'Obsessed with the Amber Lace drops',
    handle: '@clairedumont',
  },
];

export default function UGCReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-2 font-medium">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-stone hover:text-champagne transition-colors border-b border-stone/30 hover:border-champagne pb-0.5"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.titleId}
                className="font-serif text-sm text-mist font-light leading-snug italic"
              >
                "{reel.caption}"
              </p>
              <p className="font-sans text-[10px] text-champagne mt-1 tracking-wide">
                {reel.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
