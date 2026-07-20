import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';

const BrandStory = () => {
  const containerRef = useImageLoader();
  const titleId = 'story-title';
  const bodyId = 'story-body';

  return (
    <section ref={containerRef} id="story" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="relative aspect-[4/5] bg-champagne overflow-hidden">
            <img
              data-strk-img-id="story-image"
              data-strk-img={`[${bodyId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-3">
              Our Story
            </p>
            <h2
              id={titleId}
              className="font-serif text-3xl md:text-5xl text-stone-900 mb-6"
            >
              Made to Last, Designed to Love
            </h2>
            <p
              id={bodyId}
              className="font-sans text-stone-600 leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry should feel attainable. We work
              with skilled artisans to shape demi-fine pieces in 18K gold plate — designs that
              move effortlessly from morning coffee to evening plans, and become part of the
              stories you wear every day.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              Every piece is hypoallergenic, nickel-free, and finished by hand. Because the best
              treasures are the ones you reach for again and again.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Discover the Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
