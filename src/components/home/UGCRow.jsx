import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="section-padding bg-parchment overflow-hidden">
      <div className="section-container mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink font-light">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors border-b border-ink-muted/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 lg:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 rounded-none overflow-hidden group cursor-pointer"
            style={{ width: '200px', aspectRatio: '9/16', scrollSnapAlign: 'start' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn`}
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
                id={item.captionId}
                className="font-serif text-sm italic text-cream leading-snug"
              >
                {item.caption}
              </p>
              <p
                id={item.titleId}
                className="font-sans text-[10px] tracking-widest uppercase text-gold mt-1"
              >
                {item.product}
              </p>
            </div>
          </div>
        ))}

        {/* Spacer */}
        <div className="flex-shrink-0 w-2" />
      </div>
    </section>
  );
}
