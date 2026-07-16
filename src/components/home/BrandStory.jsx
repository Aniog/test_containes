import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-14 md:py-20 md:pl-16 lg:pl-24">
          <p className="text-xs font-sans uppercase tracking-widest text-gold-muted mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal font-light tracking-wide leading-tight"
          >
            Jewelry That Tells Your Story
          </h2>
          <p
            id="brand-story-desc"
            className="mt-6 text-sm md:text-base font-sans text-stone leading-relaxed max-w-md"
          >
            Velmora was born from the belief that fine jewelry should be
            accessible — not locked behind glass cases. Each piece is
            hand-finished in 18K gold plate, designed to be worn every day
            and treasured for a lifetime. We partner with artisan ateliers
            who share our commitment to ethical craftsmanship and timeless
            design.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block text-sm font-sans uppercase tracking-wider text-charcoal underline underline-offset-[6px] decoration-stone hover:text-gold hover:decoration-gold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
