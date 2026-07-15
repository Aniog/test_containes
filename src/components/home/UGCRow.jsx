import React from 'react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-20 md:py-28 bg-warm/50">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Styled by You
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-5 md:px-10 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-warm overflow-hidden mb-3">
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-sm text-cream italic leading-snug"
                >
                  "{item.caption}"
                </p>
                <p className="font-sans text-[10px] tracking-wider text-cream/60 mt-1">
                  {item.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
