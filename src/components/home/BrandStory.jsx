import React from 'react';
import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const BrandStory = () => {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body] gold jewelry making hands artisan editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:py-10">
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-4">Our World</p>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl mb-8">
              Jewelry for the Everyday Heirloom
            </h2>
            <div className="space-y-5 text-velmora-warm leading-relaxed">
              <p id="brand-story-body">
                Velmora was born from a simple belief: fine-feeling jewelry should not be saved for special occasions alone. Every piece is designed in-house and finished in 18K gold plating, created to accompany you through ordinary days and extraordinary ones.
              </p>
              <p>
                We favor clean silhouettes, warm metallics, and thoughtful details — the kind of jewelry that feels like it was always yours.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-10 border-b border-velmora-charcoal pb-1 text-xs uppercase tracking-[0.2em] hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
