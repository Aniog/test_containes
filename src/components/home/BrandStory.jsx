import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#D4C8B8] to-[#B0A08C]">
            <img
              data-strk-img-id="story-img"
              data-strk-img="jewelry atelier gold craftsmanship artisan hands elegant"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal leading-tight">
              Designed with Intention,<br />Made to Last
            </h2>
            <p className="mt-6 text-sm md:text-base text-velmora-warm leading-relaxed max-w-md">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions.
              Every piece is hand-finished with 18K gold plating, designed to layer beautifully, and priced so you can collect them all.
            </p>
            <p className="mt-4 text-sm md:text-base text-velmora-warm leading-relaxed max-w-md">
              We work with skilled artisans who share our commitment to quality, sustainability, and timeless design.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors font-medium"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
