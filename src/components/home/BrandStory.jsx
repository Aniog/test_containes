import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-base-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Jewelry with intention</h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should feel accessible, responsible, and deeply personal. Every piece is designed in our London studio and crafted in small batches using recycled 18K gold-plated brass and ethically sourced crystals.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed mb-8">
              We create quiet-luxury pieces meant to be worn daily, layered endlessly, and eventually passed down. No logos. No trends. Just timeless design.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
