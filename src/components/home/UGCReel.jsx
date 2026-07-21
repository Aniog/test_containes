import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian">#WearVelmora</h2>
          </div>
          <a href="#" className="font-sans text-xs tracking-widest uppercase text-taupe hover:text-obsidian transition-colors border-b border-taupe/40 pb-0.5">
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div key={item.id} className="flex-shrink-0 relative group cursor-pointer" style={{ width: '180px', height: '320px' }}>
            {/* 9:16 card */}
            <div className="relative w-full h-full overflow-hidden bg-obsidian-light">
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={item.titleId} className="font-serif text-sm italic text-ivory leading-snug">{item.caption}</p>
                <p id={item.descId} className="sr-only">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
