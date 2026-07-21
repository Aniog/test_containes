import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-img-a1b2c3',
    caption: 'My everyday gold',
    handle: '@sofia.wears',
    titleId: 'ugc-1-title',
    captionId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-img-d4e5f6',
    caption: 'The perfect stack',
    handle: '@mia.styles',
    titleId: 'ugc-2-title',
    captionId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-img-g7h8i9',
    caption: 'Gift from myself',
    handle: '@luna.looks',
    titleId: 'ugc-3-title',
    captionId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-img-j1k2l3',
    caption: 'Ear candy obsession',
    handle: '@zara.jewels',
    titleId: 'ugc-4-title',
    captionId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-img-m4n5o6',
    caption: 'Layered & golden',
    handle: '@elle.adorn',
    titleId: 'ugc-5-title',
    captionId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-img-p7q8r9',
    caption: 'Velmora forever',
    handle: '@nora.shine',
    titleId: 'ugc-6-title',
    captionId: 'ugc-6-caption',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-2">Community</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-obsidian tracking-wide">
              As Worn by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs tracking-[0.18em] uppercase font-medium text-velmora-mist hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-mist/40 hover:border-velmora-gold pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-serif text-sm italic text-velmora-text-light leading-tight"
              >
                "{item.caption}"
              </p>
              <p id={item.titleId} className="text-[10px] text-velmora-gold mt-1 tracking-wide">
                {item.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
