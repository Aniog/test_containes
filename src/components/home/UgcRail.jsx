import React from 'react';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

const REELS = [
  {
    id: 'reel-golden-hour',
    caption: 'golden hour, gold hour',
    query: 'close-up of gold huggie earrings worn on ear, warm golden-hour light, editorial jewelry photography',
  },
  {
    id: 'reel-layered-neck',
    caption: 'layered & loved',
    query: 'delicate layered gold necklaces on a woman neckline, soft neutral tones, editorial jewelry photography',
  },
  {
    id: 'reel-ear-stack',
    caption: 'the everyday stack',
    query: 'curated ear stack of small gold huggies and studs, macro jewelry photography, warm tones',
  },
  {
    id: 'reel-heirloom-gift',
    caption: 'a gift to keep',
    query: 'elegant gold jewelry gift box with necklace and earrings, cream silk ribbon, luxury editorial',
  },
  {
    id: 'reel-filigree-detail',
    caption: 'details that linger',
    query: 'macro shot of textured gold filigree drop earring, amber warm light, fine jewelry detail',
  },
  {
    id: 'reel-neckline-glow',
    caption: 'worn close to the heart',
    query: 'gold pendant necklace worn on collarbone, soft window light, minimal editorial styling',
  },
];

export default function UgcRail() {
  return (
    <section className="border-y border-espresso/10 bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            @velmora.jewelry
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-espresso md:text-5xl">
            Worn by <span className="italic">You</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mt-14 md:gap-6 md:px-8">
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-44 shrink-0 snap-start overflow-hidden md:w-60"
            >
              <span id={`${reel.id}-caption`} className="sr-only">
                {reel.query}
              </span>
              <div className="aspect-[9/16] w-full bg-sand">
                <StrkImage
                  imgId={`ugc-${reel.id}`}
                  query={`[${reel.id}-caption]`}
                  ratio="9x16"
                  width={600}
                  alt={reel.caption}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg italic leading-snug text-cream md:text-xl">
                “{reel.caption}”
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
