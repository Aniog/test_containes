import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a2b3c4',
    caption: 'My everyday stack',
    handle: '@sofia.m',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn on ear close up lifestyle',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d5e6f7',
    caption: 'The perfect gift',
    handle: '@claire.w',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold necklace pendant worn on neck lifestyle portrait',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g8h9i0',
    caption: 'Obsessed with these',
    handle: '@maya.r',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold ear cuff crystal earring worn editorial close up',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Brunch ready ✨',
    handle: '@anna.k',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'gold drop earrings filigree worn woman portrait lifestyle',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Gift set unboxing',
    handle: '@jade.l',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'jewelry gift box gold earrings necklace set unboxing',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'Layered & loving it',
    handle: '@nina.b',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'layered gold necklaces worn woman neck close up',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-parchment font-light">
              As Worn By You
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-parchment/40 hover:text-gold transition-colors border-b border-parchment/20 hover:border-gold pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-parchment leading-tight">
                "{item.caption}"
              </p>
              <p className="font-sans text-[10px] text-gold mt-1 tracking-wide">
                {item.handle}
              </p>
            </div>

            {/* Instagram icon overlay */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 rounded-full bg-parchment/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-parchment text-[10px]">♡</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
