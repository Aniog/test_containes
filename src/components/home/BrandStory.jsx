import React from "react";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-background">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink">Designed in small batches, made to last.</h2>
          <p className="mt-4 text-sm md:text-base text-ink-secondary leading-relaxed">
            Velmora began with a simple belief: fine jewelry should feel accessible without losing its soul. Every piece is thoughtfully designed, responsibly plated, and finished by hand.
          </p>
          <p className="mt-3 text-sm md:text-base text-ink-secondary leading-relaxed">
            We work with recycled brass and hypoallergenic materials so you can wear our pieces daily, season after season.
          </p>
          <Link to="/" className="btn-outline mt-8">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
