import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-img-1-a1b2c3',
    caption: '"My everyday gold"',
    user: '@sofia.wears',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    titleText: 'Gold ear cuff worn daily',
    descText: 'Vivid Aura ear cuff styled on ear close up warm light',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-img-2-d4e5f6',
    caption: '"The perfect gift"',
    user: '@mia.luxe',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    titleText: 'Floral necklace gift unboxing',
    descText: 'Majestic flora necklace on neck editorial portrait',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-img-3-g7h8i9',
    caption: '"Obsessed with these huggies"',
    user: '@claire.j',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    titleText: 'Gold huggie earrings close up ear',
    descText: 'Golden sphere huggie earrings worn on ear warm background',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-img-4-j1k2l3',
    caption: '"Stacking season"',
    user: '@anna.gold',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    titleText: 'Gold jewelry stack earrings necklace',
    descText: 'Layered gold jewelry stack on woman neck and ears',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-img-5-m4n5o6',
    caption: '"Worth every penny"',
    user: '@jade.style',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    titleText: 'Amber lace filigree earrings worn',
    descText: 'Textured gold filigree drop earrings on ear editorial',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-img-6-p7q8r9',
    caption: '"Gift yourself"',
    user: '@luna.wears',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    titleText: 'Royal heirloom jewelry gift set',
    descText: 'Gold jewelry gift box set earrings necklace luxury',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-sans tracking-wide uppercase text-stone hover:text-gold transition-colors underline-offset-4 hover:underline hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.titleText}</span>
            <span id={item.descId} className="sr-only">{item.descText}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.titleText}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm text-parchment italic leading-tight">
                {item.caption}
              </p>
              <p className="text-[10px] font-sans text-parchment/60 mt-1 tracking-wide">
                {item.user}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-parchment/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-parchment ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
