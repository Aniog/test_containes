import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-001"
              data-strk-img="[brand-story-text] Velmora jewelry artisan crafting gold necklace warm studio lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-brand-gold/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-[42px] text-brand-charcoal font-light leading-[1.15] mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-4 text-brand-warm-gray text-[15px] leading-relaxed">
              <p id="brand-story-text">
                Velmora was born from a simple belief: luxury should be part of your everyday, not reserved for special occasions. We create demi-fine jewelry that bridges the gap between costume and fine — premium enough to treasure, accessible enough to wear daily.
              </p>
              <p>
                Every piece is crafted in 18K gold plating over surgical-grade materials, designed to be hypoallergenic and built to last. We work directly with skilled artisans, cutting out middlemen to bring you exceptional quality at honest prices.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm text-brand-charcoal tracking-[0.1em] uppercase font-sans border-b border-brand-charcoal/30 pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              Learn More
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
