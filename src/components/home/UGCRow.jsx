import React from 'react';
import { StockImage } from '@/components/shared/StockImage';

const UGC_ITEMS = [
  {
    id: 'ugc-1',
    caption: 'Everyday gold moments',
    handle: '@leila.m',
    query: ['ugc-1-caption'],
  },
  {
    id: 'ugc-2',
    caption: 'Layered & loved',
    handle: '@sophie.styles',
    query: ['ugc-2-caption'],
  },
  {
    id: 'ugc-3',
    caption: 'Date night stack',
    handle: '@nina.woo',
    query: ['ugc-3-caption'],
  },
  {
    id: 'ugc-4',
    caption: 'Subtle shimmer',
    handle: '@ava.gold',
    query: ['ugc-4-caption'],
  },
  {
    id: 'ugc-5',
    caption: 'Gift to self',
    handle: '@maria.jewels',
    query: ['ugc-5-caption'],
  },
  {
    id: 'ugc-6',
    caption: 'Morning light',
    handle: '@claire.elise',
    query: ['ugc-6-caption'],
  },
];

export function UGCRow() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            #VelmoraWomen
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8 lg:px-12">
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[9/16] w-[220px] shrink-0 overflow-hidden md:w-[260px]"
          >
            <StockImage
              id={item.id}
              ratio="9x16"
              width={500}
              queryParts={item.query}
              alt={item.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
              <p
                id={item.query[0]}
                className="font-serif text-xl italic leading-tight"
              >
                {item.caption}
              </p>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-widest text-cream/80">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
