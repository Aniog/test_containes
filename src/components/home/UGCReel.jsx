import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Perfect for layering',
    query: 'gold necklace layering on neck warm skin editorial',
  },
  {
    id: 'ugc-2',
    caption: 'My everyday earrings',
    query: 'gold hoop earrings woman ear closeup soft lighting',
  },
  {
    id: 'ugc-3',
    caption: 'Gift she loved',
    query: 'woman opening jewelry gift box elegant hands',
  },
  {
    id: 'ugc-4',
    caption: 'Stacked and stunning',
    query: 'gold jewelry stacking multiple earrings ear editorial',
  },
  {
    id: 'ugc-5',
    caption: 'Date night essential',
    query: 'gold pendant necklace woman collarbone warm lighting',
  },
  {
    id: 'ugc-6',
    caption: 'Minimal but luxe',
    query: 'single gold huggie earring minimal style closeup',
  },
  {
    id: 'ugc-7',
    caption: 'Worth every penny',
    query: 'gold crystal earrings woman portrait warm tone',
  },
  {
    id: 'ugc-8',
    caption: 'My new obsession',
    query: 'gold jewelry flat lay dark background editorial',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velvet-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-overline text-gilded-600 mb-2">Styled by You</p>
            <h2 className="text-heading text-velvet-950">#VelmoraStyle</h2>
          </div>
          <a href="#" className="text-overline text-velvet-600 hover:text-velvet-950 transition-colors hidden md:block">
            Follow us on Instagram &rarr;
          </a>
        </div>

        {/* Horizontal scroll reel */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 mask-fade-right">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 lg:w-56 aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-base text-white/90 leading-snug"
                >
                  {item.caption}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gilded-700/0 group-hover:bg-gilded-700/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
