import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-warm/30">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-7d4e2f"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-10 md:p-16 lg:p-20">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6"
            >
              Quiet Luxury,<br />Consciously Crafted
            </h2>
            <p
              id="brand-story-text"
              className="text-mocha/70 leading-relaxed mb-8 text-sm md:text-base"
            >
              Velmora was born from the belief that every woman deserves jewelry that feels personal and precious — without the luxury markup. We work directly with artisan workshops to create demi-fine pieces in 18K gold plate, designed to be worn, loved, and passed down.
            </p>
            <Link to="/" className="btn-outline text-xs">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
