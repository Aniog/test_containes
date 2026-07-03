import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative h-[360px] overflow-hidden rounded-2xl md:h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Made with intention, worn with ease.</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-secondary md:text-base">
            Velmora was founded on a simple belief: fine jewelry should feel effortless. We design each piece in-house,
            using 18K gold-plated materials and ethically sourced crystals. The result is jewelry that looks expensive,
            feels light, and earns its place in your everyday rotation.
          </p>
          <Link to="/about" className="btn-outline mt-8">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
