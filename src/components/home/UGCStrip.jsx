import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/testimonials';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="text-center">
          <h2 className="section-heading">Styled by You</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-3 md:gap-4 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                data-strk-img-id={`ugc-${item.id}-${index}`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-product-${item.id}] gold jewelry worn editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.78'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-base md:text-lg text-white italic leading-tight">
                  {item.caption}
                </p>
                <p
                  id={`ugc-product-${item.id}`}
                  className="text-[10px] text-white/60 uppercase tracking-widest font-sans mt-1"
                >
                  {item.product}
                </p>
              </div>

              <span id={`ugc-caption-${item.id}`} className="hidden">{item.caption}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
