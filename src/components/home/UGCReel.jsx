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
    <section className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-2 font-sans">As Worn</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors hidden md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-10 pb-2"
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn close up portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-white/90 leading-snug"
              >
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
