import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCreel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-margin">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p 
            className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
            style={{ letterSpacing: '0.3em' }}
          >
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
        </div>
      </div>

      {/* Reel strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div 
              key={item.id}
              className="relative w-48 sm:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] gold jewelry worn fashion editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <p 
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
