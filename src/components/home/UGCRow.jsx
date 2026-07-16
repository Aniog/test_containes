import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The perfect everyday ear stack',
    handle: '@sophiamae',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
  },
  {
    id: 'ugc-2',
    caption: 'Gifted myself the Heirloom Set',
    handle: '@clairelouise',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
  },
  {
    id: 'ugc-3',
    caption: 'These huggies never come off',
    handle: '@nataliarose',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
  },
  {
    id: 'ugc-4',
    caption: 'Wearing the Flora Nectar daily',
    handle: '@emilywren',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
  },
  {
    id: 'ugc-5',
    caption: 'Gold jewelry that actually lasts',
    handle: '@isabellav',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
  },
  {
    id: 'ugc-6',
    caption: 'My go-to for gifting',
    handle: '@hannahkate',
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
    <section ref={containerRef} className="bg-warmwhite py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-[10px] uppercase tracking-[0.14em] text-stone-warm hover:text-gold transition-colors border-b border-stone-light pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic font-light text-warmwhite leading-snug"
              >
                "{item.caption}"
              </p>
              <p className="font-inter text-[9px] text-warmwhite/60 mt-1 uppercase tracking-[0.1em]">
                {item.handle}
              </p>
            </div>

            {/* Instagram icon overlay */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-6 h-6 bg-warmwhite/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-warmwhite text-[8px]">♥</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
