import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] artisan crafting gold jewelry close-up hands"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 id="story-title" className="section-title mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="hairline mb-6" />
            <p id="story-desc" className="body-text mb-5">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is.
              We create demi-fine pieces using 18K gold plating over sterling silver — the perfect balance of luxury
              and accessibility.
            </p>
            <p className="body-text mb-8">
              Each piece is designed in our studio, hand-finished by skilled artisans, and made to last. Because
              jewelry isn't just an accessory — it's a memory you wear.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-charcoal text-xs tracking-[0.15em] uppercase font-medium group border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
