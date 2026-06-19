import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream)] border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent('gold jewelry craftsman hands workshop warm light artisan making earrings editorial photography')}?width=700&height=900&nologo=true`}
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
              Designed with Intention,<br />Made to Last
            </h2>
            <div className="space-y-4 text-[var(--stone)] text-sm md:text-base leading-relaxed font-light">
              <p>
                Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed in-house and crafted with 18K gold plating, so you can wear elegance every single day.
              </p>
              <p>
                We work directly with artisans who share our obsession for detail — from the curve of a huggie hinge to the weight of a pendant chain. The result is demi-fine jewelry that looks and feels heirloom, without the heirloom price.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-widest font-medium border-b border-[var(--ink)] pb-1 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
