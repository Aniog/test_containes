import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', imgId: 'ugc-reel-1-a2b3c4', caption: '"My everyday earring."', handle: '@sophiem', titleId: 'ugc-1-title', descId: 'ugc-1-desc', desc: 'gold huggie earrings worn woman ear close up' },
  { id: 'reel-2', imgId: 'ugc-reel-2-d5e6f7', caption: '"The perfect gift."', handle: '@isabelleR', titleId: 'ugc-2-title', descId: 'ugc-2-desc', desc: 'gold necklace pendant worn woman neck jewelry' },
  { id: 'reel-3', imgId: 'ugc-reel-3-g8h9i1', caption: '"Obsessed."', handle: '@camilleT', titleId: 'ugc-3-title', descId: 'ugc-3-desc', desc: 'gold ear cuff crystal earring close up model' },
  { id: 'reel-4', imgId: 'ugc-reel-4-j2k3l4', caption: '"Worth every penny."', handle: '@natalieW', titleId: 'ugc-4-title', descId: 'ugc-4-desc', desc: 'gold filigree drop earrings worn woman portrait' },
  { id: 'reel-5', imgId: 'ugc-reel-5-m5n6o7', caption: '"Gifted myself."', handle: '@emmaL', titleId: 'ugc-5-title', descId: 'ugc-5-desc', desc: 'gold jewelry set earrings necklace flat lay' },
  { id: 'reel-6', imgId: 'ugc-reel-6-p8q9r1', caption: '"Timeless."', handle: '@oliviaK', titleId: 'ugc-6-title', descId: 'ugc-6-desc', desc: 'gold dome huggie earrings worn ear close up' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-2">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-stone hover:text-champagne transition-colors border-b border-stone hover:border-champagne pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-snap-x px-4 sm:px-6 lg:px-8 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={reel.titleId} className="hidden">{reel.caption}</span>
            <span id={reel.descId} className="hidden">{reel.desc}</span>

            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-ivory leading-tight mb-0.5">{reel.caption}</p>
              <p className="font-sans text-[10px] text-ivory/60">{reel.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
