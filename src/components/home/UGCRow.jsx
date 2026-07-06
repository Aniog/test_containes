import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"My everyday gold"', handle: '@sofia.m', imgId: 'ugc-img-1-a1b2c3', titleId: 'ugc-title-1', descId: 'ugc-desc-1', desc: 'gold huggie earrings worn on ear close up lifestyle' },
  { id: 'ugc-2', caption: '"Gifted myself this"', handle: '@claire.w', imgId: 'ugc-img-2-d4e5f6', titleId: 'ugc-title-2', descId: 'ugc-desc-2', desc: 'gold necklace worn on neck woman lifestyle portrait' },
  { id: 'ugc-3', caption: '"Obsessed with the quality"', handle: '@maya.r', imgId: 'ugc-img-3-g7h8i9', titleId: 'ugc-title-3', descId: 'ugc-desc-3', desc: 'gold ear cuff crystal earring worn close up' },
  { id: 'ugc-4', caption: '"Perfect for stacking"', handle: '@anna.k', imgId: 'ugc-img-4-j1k2l3', titleId: 'ugc-title-4', descId: 'ugc-desc-4', desc: 'stacked gold earrings jewelry ear styling' },
  { id: 'ugc-5', caption: '"The best gift ever"', handle: '@lily.p', imgId: 'ugc-img-5-m4n5o6', titleId: 'ugc-title-5', descId: 'ugc-desc-5', desc: 'gold jewelry gift box luxury unboxing' },
  { id: 'ugc-6', caption: '"Wear it every day"', handle: '@zoe.t', imgId: 'ugc-img-6-p7q8r9', titleId: 'ugc-title-6', descId: 'ugc-desc-6', desc: 'gold drop earrings filigree worn woman portrait' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest3 text-gold mb-3">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">The Velmora Community</h2>
          </div>
          <a href="#" className="hidden md:block font-sans text-xs uppercase tracking-widest2 text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors">
            @velmora
          </a>
        </div>
      </div>

      <div
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-5 md:px-10 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start', aspectRatio: '9/16' }}
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span id={item.titleId} className="hidden">{item.handle} jewelry</span>
            <span id={item.descId} className="hidden">{item.desc}</span>

            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-ivory leading-tight mb-1">{item.caption}</p>
              <p className="font-sans text-[10px] text-ivory/60 tracking-wide">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
