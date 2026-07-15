import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] bg-velmora-sand overflow-hidden rounded-sm">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
            <h2 id="brand-story-heading" className="sr-only">Velmora Fine Jewelry Brand Story</h2>
          </div>
          <div className="md:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
              Designed for the Modern Woman
            </h2>
            <p className="mt-6 text-velmora-warmgray leading-relaxed text-sm md:text-base">
              Velmora was born from a belief that luxury should feel effortless. Each piece in our collection is thoughtfully designed in small batches, using 18K gold plating and hypoallergenic materials that stand the test of time. We create jewelry for the moments that matter — the quiet confidence of a morning routine, the joy of a gift given, the sparkle of an evening out.
            </p>
            <p className="mt-4 text-velmora-warmgray leading-relaxed text-sm md:text-base">
              Our pieces are made to be layered, loved, and lived in. No occasion required.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 text-xs font-medium tracking-[0.2em] uppercase border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
