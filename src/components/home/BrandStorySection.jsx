import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StrkImage from '@/components/ui/StrkImage';

export function BrandStorySection() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <StrkImage
              id="brand-story-img"
              query="[story-subtitle] [story-title]"
              ratio="4x5"
              width={800}
              alt="Velmora jewelry craftsmanship"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl font-light text-charcoal md:text-4xl lg:text-5xl"
            >
              Quiet Luxury,
              <br />
              Made Personal
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 max-w-md text-base leading-relaxed text-warm-gray"
            >
              Velmora was born from a love of intimate, enduring design. Each piece
              is crafted in small batches using responsibly sourced 18k gold-plated
              brass — made to be worn close to the skin and kept for years.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-warm-gray">
              We believe jewelry should feel like a quiet confidence: refined,
              effortless, and entirely your own.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal hover:text-gold-dark transition-colors"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
