import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reelItems = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-a2b3c4',
    caption: 'My everyday gold',
    subcaption: 'Vivid Aura Cuff',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    query: 'gold ear cuff worn woman close up',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-d5e6f7',
    caption: 'Gifted & obsessed',
    subcaption: 'Royal Heirloom Set',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    query: 'gold necklace earring set woman wearing',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-g8h9i1',
    caption: 'Stack season',
    subcaption: 'Golden Sphere Huggies',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    query: 'gold huggie earrings stacked ear close up',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-j2k3l4',
    caption: 'Florals forever',
    subcaption: 'Majestic Flora Nectar',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    query: 'floral crystal necklace woman wearing editorial',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-m5n6o7',
    caption: 'Lace & gold',
    subcaption: 'Amber Lace Earrings',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    query: 'gold filigree drop earrings woman portrait',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-p8q9r1',
    caption: 'Morning ritual',
    subcaption: 'Vivid Aura Jewels',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    query: 'gold jewelry morning light woman getting ready',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">As Worn</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">The Velmora Edit</h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reelItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-reel overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.subcaption}</span>
            <span id={item.descId} className="sr-only">{item.query}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-sm italic text-parchment leading-tight">{item.caption}</p>
              <p className="font-manrope text-[9px] tracking-widest uppercase text-gold/80 mt-1">{item.subcaption}</p>
            </div>

            {/* Instagram-style play icon hint */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-parchment/60 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-parchment/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
