import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-warm-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-sand/10 overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.15em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-velmora-charcoal leading-snug"
            >
              Jewelry that tells your story, crafted with intention
            </h2>
            <hr className="hr-hairline my-8 max-w-full" />
            <p
              id="brand-story-text"
              className="text-velmora-stone leading-relaxed mb-8"
            >
              Velmora was born from the belief that fine jewelry should be an everyday indulgence — not locked away for special occasions. Each piece is designed in our atelier with meticulous attention to detail, using 18K gold plating and ethically sourced materials. We create jewelry that becomes part of your daily ritual, your signature, your story.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-velmora font-medium"
            >
              Discover More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}