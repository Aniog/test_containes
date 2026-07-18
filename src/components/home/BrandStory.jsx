import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StockImage } from '@/components/shared/StockImage';

export function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <StockImage
              id="brand-story-img"
              ratio="3x4"
              width={900}
              queryParts={['brand-story-title', 'brand-story-body']}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center bg-ink px-6 py-16 text-cream md:px-12 lg:px-20">
            <div className="max-w-md">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Our Atelier
              </p>
              <h2
                id="brand-story-title"
                className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl"
              >
                Designed with Intention
              </h2>
              <p
                id="brand-story-body"
                className="mt-6 leading-relaxed text-cream/80"
              >
                Velmora was born from a belief that fine jewelry should feel personal,
                accessible, and made to last. Each piece is cast in 18k gold-plated
                metal, set by hand, and finished with the quiet details that turn
                everyday moments into keepsakes.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-cream transition hover:text-gold"
              >
                Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
