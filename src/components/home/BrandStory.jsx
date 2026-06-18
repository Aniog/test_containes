import React from "react";
import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-bone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-mocha">
            <img
              alt="Velmora atelier"
              data-strk-img-id="brand-story-velmora-atelier-3a8d2e"
              data-strk-img="[brand-story-title] [brand-story-body] artisan jewelry atelier warm editorial hands crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl leading-[1.05] text-ink"
            >
              Quiet pieces,<br />
              <span className="italic text-champagne">made to be lived in.</span>
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 font-sans text-base md:text-lg text-mocha leading-relaxed"
            >
              Velmora began with a simple idea — that fine-feeling jewelry shouldn't
              be reserved for the occasion. Each piece is hand-finished in our atelier
              in 18k gold over recycled brass, then quality-checked by the same small
              team, every time.
            </p>
            <p className="mt-4 font-sans text-base text-mocha/85 leading-relaxed">
              No trends, no theatrics. Just considered, warm, wear-everywhere pieces
              you'll find yourself reaching for ten years from now.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block font-sans uppercase tracking-widest2 text-[11px] text-ink border-b border-ink hover:text-champagne hover:border-champagne pb-1 transition-all duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
