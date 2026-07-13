import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-2 font-medium">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors border-b border-ink-muted/30 hover:border-gold pb-0.5"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start', aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn on model ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-serif text-sm italic text-ivory leading-tight mb-1"
              >
                "{item.caption}"
              </p>
              <p className="font-sans text-[10px] text-ivory/60 tracking-wide">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
