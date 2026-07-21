import React from 'react';
import { PRODUCTS } from '@/data/products';

const REELS = [
  { id: 'maria', handle: '@maria.wears', caption: 'Golden hour, always', productIndex: 0 },
  { id: 'sofia', handle: '@sofialoren.style', caption: 'My everyday stack', productIndex: 2 },
  { id: 'elena', handle: '@elena.muse', caption: 'Garden party ready', productIndex: 1 },
  { id: 'isabelle', handle: '@isa.takes.par', caption: 'Heirloom energy', productIndex: 4 },
  { id: 'camille', handle: '@camille.rousseau', caption: 'Lace and candlelight', productIndex: 3 },
  { id: 'noor', handle: '@noor.edit', caption: 'Pearls, but make it modern', productIndex: 5 },
];

export default function ReelsRow() {
  return (
    <section className="border-y border-hairline bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">#VelmoraOnYou</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">
              Worn by You
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-taupe md:block">
            Tag @velmora.jewelry to be featured — we repost our favorites every Sunday.
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto no-scrollbar md:mt-12">
        <div className="mx-auto flex max-w-7xl gap-4 px-5 md:gap-5 md:px-8">
          {REELS.map((reel) => {
            const product = PRODUCTS[reel.productIndex];
            return (
              <figure
                key={reel.id}
                className="reveal group relative w-40 shrink-0 overflow-hidden bg-espresso sm:w-48 md:w-52"
              >
                <div className="aspect-[9/16]">
                  <img
                    data-strk-img-id={`reel-${reel.id}-a91f3c`}
                    data-strk-img={`[${product.textIds.tagline}] [${product.textIds.name}] close-up of gold jewelry worn on a woman's ear and neck, candid instagram reel aesthetic, warm tones, shallow depth of field`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="420"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${reel.handle} wearing ${product.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-espresso/10"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-base italic leading-snug text-ivory md:text-lg">
                    “{reel.caption}”
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-ivory/60">
                    {reel.handle}
                  </p>
                </figcaption>
                <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-espresso/45 backdrop-blur-sm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-ivory">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
