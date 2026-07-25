import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
              alt="Velmora brand story"
              className="h-72 md:h-[480px] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mt-6 text-sm text-brand-muted leading-relaxed">
              Velmora was born from a belief that fine jewelry should feel effortless.
              We design demi-fine pieces in warm 18K gold plating, using ethically sourced
              materials and small-batch production to keep our footprint light.
            </p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              Every design is made to be worn daily—for boardrooms, brunches, and everything in between.
            </p>
            <Link to="/about" className="mt-8 inline-flex text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
