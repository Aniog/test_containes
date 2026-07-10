import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    caption: 'Effortless everyday gold',
    captionId: 'ugc-caption-1',
    handle: '@maya.wears',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    caption: 'The perfect stack',
    captionId: 'ugc-caption-2',
    handle: '@sophiestyle',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    caption: 'Golden hour, always',
    captionId: 'ugc-caption-3',
    handle: '@lena.luxe',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Gifted myself this set',
    captionId: 'ugc-caption-4',
    handle: '@claire.m',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Minimal & timeless',
    captionId: 'ugc-caption-5',
    handle: '@nadia.gold',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'My everyday earrings',
    captionId: 'ugc-caption-6',
    handle: '@zoe.wears',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-light">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs tracking-widest-md uppercase text-velmora-text-light/40 hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-text-light/20 hover:border-velmora-gold pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-velmora-text-light leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p className="font-manrope text-[10px] text-velmora-gold/70 tracking-wider">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
