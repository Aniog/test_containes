import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-[4/5] bg-sand overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <div className="hairline w-16 mb-6"></div>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be accessible,
              and jewelry should be treasured, not just worn.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed and crafted using
              18K gold plating over high-quality brass, ensuring that every item
              feels special while remaining approachable. We believe that fine jewelry
              should accompany you through life's everyday moments and milestone celebrations alike.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors group"
            >
              <span className="tracking-wider uppercase text-sm">Discover Our Journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
