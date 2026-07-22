import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velvet-50">
      <div className="container-site mb-10">
        <h2 className="section-heading text-3xl md:text-4xl text-velvet-950 text-center mb-2">
          Worn by You
        </h2>
        <p className="text-sm text-velvet-500 text-center font-sans font-light">
          Tag <span className="font-medium">@velmorajewelry</span> to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-5 md:px-16 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center"
          >
            <div className="relative aspect-[9/16] bg-velvet-100 rounded-sm overflow-hidden group cursor-pointer">
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-${item.id}-b4e9`}
                data-strk-img={`[ugc-caption-${item.id}] worn by you velvet gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="text-white text-sm font-serif italic leading-snug"
                >
                  {item.caption}
                </p>
                <p className="text-white/60 text-[11px] font-sans mt-1">
                  {item.handle}
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
