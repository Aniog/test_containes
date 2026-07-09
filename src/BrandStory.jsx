import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velmora-sand">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-heading] [brand-story-text]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-16 xl:pl-24 py-12 lg:py-0">
          <p className="text-xs tracking-[0.2em] text-velmora-gold uppercase mb-4">Our Philosophy</p>
          <h2 id="brand-story-heading" className="font-serif text-3xl lg:text-4xl tracking-wide leading-tight mb-6">
            Jewelry That Becomes<br />Part of Your Story
          </h2>
          <p id="brand-story-text" className="text-velmora-slate leading-relaxed mb-8 max-w-md">
            Velmora was founded on the belief that fine jewelry should be worn and loved every day — not reserved for special occasions. Each piece is designed in Paris and crafted from 18K gold-plated brass, meant to evolve with you.
          </p>
          <Link to="/about" className="btn-ghost">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
