import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            As Seen on You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 rounded-lg overflow-hidden group"
            >
              <div className="aspect-[9/16] bg-linen relative overflow-hidden">
                <img
                  data-strk-img-id={`ugc-reel-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 270 480'%3E%3Crect fill='%23F0EDE6' width='270' height='480'/%3E%3Ctext x='135' y='240' text-anchor='middle' fill='%23C9A84C' font-size='12' font-family='serif'%3EVelmora%3C/text%3E%3C/svg%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-ivory italic leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
