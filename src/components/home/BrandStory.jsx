import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PLACEHOLDER_IMG } from '@/data/products';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="story" className="border-y border-umber bg-onyx/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-10 md:py-24 lg:py-28">
        <div className="reveal relative order-2 md:order-1">
          <div className="aspect-[4/3] overflow-hidden border border-umber bg-noir">
            <img
              data-strk-img-id="story-atelier-s1"
              data-strk-img="[story-copy] [story-title] jewelry atelier artisan hands crafting gold jewelry warm light"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={PLACEHOLDER_IMG}
              alt="Artisan hands crafting gold jewelry in the Velmora atelier"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden h-24 w-24 border border-gold/40 md:block" aria-hidden="true" />
        </div>

        <div className="reveal order-1 md:order-2">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.28em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-3 font-serif text-4xl font-medium leading-tight text-ivory md:text-5xl"
          >
            An Atelier of
            <span className="italic text-goldlight"> Quiet Luxury</span>
          </h2>
          <p id="story-copy" className="mt-6 font-sans text-sm leading-relaxed text-sand md:text-base">
            Velmora began at a single workbench, with a simple belief: fine jewelry
            should not wait for special occasions. Each piece is designed in our
            atelier, cast in recycled brass, and finished in a generous layer of 18K
            gold — so the pieces you love today become the heirlooms you keep forever.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-sand md:text-base">
            Small batches. Honest materials. Jewelry made to live in.
          </p>
          <Link
            to="/shop"
            className="group mt-8 inline-flex items-center gap-2.5 border-b border-gold/50 pb-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.26em] text-gold transition-colors duration-300 hover:border-gold hover:text-goldlight"
          >
            Discover the Collection
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
