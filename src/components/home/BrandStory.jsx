import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-title] [brand-subtitle]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-label text-accent mb-3">
              Our Story
            </p>
            <h2
              id="brand-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-normal leading-[1.15]"
            >
              Designed for the Modern Muse
            </h2>
            <p
              id="brand-subtitle"
              className="mt-5 font-sans text-base text-text-secondary leading-relaxed max-w-md"
            >
              Velmora was born from a belief that fine jewelry should feel personal, not precious.
              Every piece is designed in-house, crafted with 18K gold plating, and made to be worn
              daily — from morning coffee to midnight toasts.
            </p>
            <p className="mt-4 font-sans text-base text-text-secondary leading-relaxed max-w-md">
              We create for the woman who buys herself flowers, who gifts with intention,
              and who knows that the smallest details make the biggest difference.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-label text-text-primary border-b border-text-primary pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
