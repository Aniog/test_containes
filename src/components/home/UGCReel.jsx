import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-3">
          Worn by You
        </h2>
        <p className="font-sans text-sm text-warm-gray text-center">
          Real moments, real gold
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-44 md:w-52 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-gold-light relative overflow-hidden">
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-reel-${item.id}-a7b3c9`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/60 to-transparent">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
