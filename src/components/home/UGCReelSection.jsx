import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reelItems = [
  { id: 'reel-1', caption: '"My everyday staple"', handle: '@sophiem', titleId: 'reel-1-title', descId: 'reel-1-desc', titleText: 'gold huggie earrings worn on ear close up lifestyle', descText: 'woman wearing gold earrings' },
  { id: 'reel-2', caption: '"The perfect gift"', handle: '@isabelleR', titleId: 'reel-2-title', descId: 'reel-2-desc', titleText: 'gold necklace worn on neck lifestyle photo', descText: 'woman wearing gold necklace' },
  { id: 'reel-3', caption: '"Obsessed with these"', handle: '@camilleT', titleId: 'reel-3-title', descId: 'reel-3-desc', titleText: 'gold ear cuff crystal earring worn lifestyle', descText: 'woman wearing gold ear cuff' },
  { id: 'reel-4', caption: '"Stacking perfection"', handle: '@lunaV', titleId: 'reel-4-title', descId: 'reel-4-desc', titleText: 'stacked gold earrings jewelry lifestyle photo', descText: 'woman wearing stacked gold earrings' },
  { id: 'reel-5', caption: '"Worth every penny"', handle: '@ellaK', titleId: 'reel-5-title', descId: 'reel-5-desc', titleText: 'gold filigree drop earrings worn lifestyle', descText: 'woman wearing gold drop earrings' },
  { id: 'reel-6', caption: '"Gift-worthy packaging"', handle: '@noraB', titleId: 'reel-6-title', descId: 'reel-6-desc', titleText: 'jewelry gift box presentation gold jewelry', descText: 'jewelry gift box' },
];

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-velmora-linen py-20 md:py-28 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">As Seen On</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-text-dark font-light">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark border-b border-velmora-text-dark pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors self-start md:self-auto"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Hidden text nodes */}
        {reelItems.map(item => (
          <span key={`text-${item.id}`} className="hidden">
            <span id={item.titleId}>{item.titleText}</span>
            <span id={item.descId}>{item.descText}</span>
          </span>
        ))}

        {reelItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 rounded-sm overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={`${item.id}-img`}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-velmora-cream leading-snug mb-1">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-velmora-gold tracking-wider">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
