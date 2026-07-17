import React from 'react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-padding max-w-[1440px] mx-auto mb-10">
        <p className="section-subtitle mb-3">Wear It Your Way</p>
        <h2 className="section-title">From Our Community</h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-5 md:px-10 lg:px-16" style={{ paddingLeft: 'max(1.25rem, calc((100vw - 1440px) / 2 + 2.5rem))' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] ugc jewelry worn ear neck closeup`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-sm md:text-base text-cream/90 italic leading-snug">
                  "{item.caption}"
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg group-hover:ring-gold/40 transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
