import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday earrings."',
    handle: '@sofia.m',
    imgId: 'ugc-reel-1-a2b3c4',
    titleId: 'ugc-title-1',
  },
  {
    id: 'ugc-2',
    caption: '"The perfect gift."',
    handle: '@claire.w',
    imgId: 'ugc-reel-2-d5e6f7',
    titleId: 'ugc-title-2',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies."',
    handle: '@maya.r',
    imgId: 'ugc-reel-3-g8h9i0',
    titleId: 'ugc-title-3',
  },
  {
    id: 'ugc-4',
    caption: '"Wore this to my wedding."',
    handle: '@anna.k',
    imgId: 'ugc-reel-4-j1k2l3',
    titleId: 'ugc-title-4',
  },
  {
    id: 'ugc-5',
    caption: '"Quiet luxury, always."',
    handle: '@priya.s',
    imgId: 'ugc-reel-5-m4n5o6',
    titleId: 'ugc-title-5',
  },
  {
    id: 'ugc-6',
    caption: '"Gifted to my sister."',
    handle: '@emma.l',
    imgId: 'ugc-reel-6-p7q8r9',
    titleId: 'ugc-title-6',
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
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs uppercase tracking-widest text-stone border-b border-stone pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto ugc-scroll px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-ivory leading-snug mb-1"
              >
                {item.caption}
              </p>
              <p className="font-inter text-[10px] text-ivory/60 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
