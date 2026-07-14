import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream-dark">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-f4e8d1"
              data-strk-img="artisan hands crafting gold jewelry workshop warm lighting editorial behind the scenes"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans text-velmora-gold uppercase tracking-[0.3em] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal mb-6 leading-[1.15]">
              Jewelry That Feels Like You
            </h2>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: everyone deserves jewelry that feels special without the luxury markup. We design demi-fine pieces in 18K gold that transition effortlessly from morning coffee to evening cocktails.
            </p>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              Each piece is crafted with care — hypoallergenic, built to last, and designed in our studio with the modern woman in mind. No trends, no fast fashion. Just quiet, lasting elegance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300 group"
            >
              Read Our Story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
