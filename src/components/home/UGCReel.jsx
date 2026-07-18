import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The Vivid Aura cuff — my everyday essential',
    handle: '@sophiamarie',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Stacked and obsessed with the Golden Sphere huggies',
    handle: '@ellarose.style',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Flora Nectar necklace for every occasion',
    handle: '@nataliejoyce',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gifted the Heirloom Set — she cried happy tears',
    handle: '@amandaclaire',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Amber Lace drops are everything this season',
    handle: '@isabellav',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Velmora gold — worth every penny',
    handle: '@gracefulwear',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs tracking-[0.1em] uppercase text-warm-gray hover:text-gold transition-colors border-b border-warm-gray/30 pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-ivory leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p className="font-inter text-[9px] tracking-wide text-ivory/60">
                {item.handle}
              </p>
            </div>

            {/* Hidden title for image query */}
            <span id={item.titleId} className="sr-only">Velmora jewelry worn</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
