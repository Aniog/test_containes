import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-charcoal-100">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-light leading-snug">
              Designed with Intention. Worn with Confidence.
            </h2>
            <p className="mt-6 text-charcoal-600 leading-relaxed">
              Velmora was born from a belief that fine jewelry should feel accessible without sacrificing quality. Each piece is designed in our studio and crafted in small batches using 18K gold plating and hypoallergenic materials — so you can wear them every day, everywhere.
            </p>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              We work with skilled artisans who share our obsession with detail. The result? Jewelry that feels like a quiet luxury — pieces that become part of your story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wide text-charcoal-800 hover:text-gold-700 transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
