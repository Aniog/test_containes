import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BrandStory() {
  const [sectionRef, revealed] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      aria-labelledby="brand-story-heading"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f1g2h3"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light tracking-wide"
            >
              Where Art Meets Adornment
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-6 mb-6" aria-hidden="true" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts
              demi-fine pieces that honor traditional goldsmithing while embracing modern
              sensibility. Each piece is designed in our studio and finished with 18K gold,
              creating jewelry that moves with you — from morning coffee to midnight toasts.
            </p>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mb-8">
              We source responsibly, price fairly, and design for the long term. Because
              the best jewelry isn't just worn — it's treasured.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-velmora-gold text-velmora-gold text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold hover:text-white transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
