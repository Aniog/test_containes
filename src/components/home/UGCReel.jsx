import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The Vivid Aura ear cuff — my everyday essential',
    handle: '@sophiamae',
    imgId: 'ugc-reel-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Flora Nectar for the golden hour',
    handle: '@elenarose',
    imgId: 'ugc-reel-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Stacking my Velmora huggies all week',
    handle: '@clairedumont',
    imgId: 'ugc-reel-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gifted the Heirloom Set — she cried',
    handle: '@nataliakim',
    imgId: 'ugc-reel-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Amber Lace drops with everything',
    handle: '@isabellaford',
    imgId: 'ugc-reel-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'My Velmora morning ritual',
    handle: '@zoeharper',
    imgId: 'ugc-reel-6-p7q8r9',
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
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs font-sans uppercase tracking-widest text-stone hover:text-gold transition-colors border-b border-stone/30 hover:border-gold pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-serif text-xs text-ivory italic leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="text-[10px] font-sans text-gold/80 tracking-wide"
              >
                {item.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 md:hidden">
        <a href="#" className="text-xs font-sans uppercase tracking-widest text-stone hover:text-gold transition-colors">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default UGCReel;
