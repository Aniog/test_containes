import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="velmora-brand-story"
              data-strk-img="jewelry artisan workshop gold warm lighting craftsperson hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-overline uppercase tracking-overline text-gold block mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-heading-2 text-velmora-900 leading-tight">
              Jewelry That Feels Like You
            </h2>
            <div className="mt-6 space-y-4 text-velmora-500 text-body leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury should be felt, not flaunted. We craft demi-fine jewelry that bridges the gap between costume and couture — pieces that feel precious without the precious price tag.
              </p>
              <p>
                Every piece in our collection is designed in our London studio and crafted with 18K gold plating over sterling silver. We use only hypoallergenic materials because we believe beautiful jewelry should never compromise your comfort.
              </p>
              <p>
                From the drawing board to your jewelry box, each creation goes through meticulous quality checks to ensure it meets our exacting standards — and yours.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-velmora-900 hover:text-gold transition-colors group"
            >
              Read Our Full Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
