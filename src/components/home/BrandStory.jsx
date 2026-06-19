import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function BrandStory() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream" ref={ref}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative aspect-[4/5] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div
              className="absolute inset-0 bg-brand-sand"
              data-strk-img-id="brand-story-main"
              data-strk-img="gold jewelry artisan workshop warm light crafting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-brand-gold/30" />
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal leading-snug mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="hairline-divider max-w-[60px] mb-8" />
            <p className="text-sm text-brand-mid-brown leading-relaxed mb-5">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as the moments she wears it in. We create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry.
            </p>
            <p className="text-sm text-brand-mid-brown leading-relaxed mb-8">
              Each piece is crafted in 18K gold-plated sterling silver, designed to last, and priced to be accessible. Because luxury should be something you reach for every day.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
