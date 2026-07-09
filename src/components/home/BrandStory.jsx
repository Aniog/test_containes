import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden bg-cream-100">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Our Story
          </h2>
          <div className="divider-hairline w-16 mb-6" />
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Velmora was born from a simple belief: jewelry should be treasured, not trend-driven.
            Each piece in our collection is thoughtfully designed to be worn, loved, and passed down.
          </p>
          <p className="text-charcoal-600 leading-relaxed mb-8">
            We use only the finest 18K gold plating and hypoallergenic materials,
            ensuring that every piece feels as beautiful as it looks. From our hands to yours,
            each creation carries our commitment to quiet luxury and enduring quality.
          </p>
          <Link
            to="/about"
            className="btn-premium btn-premium-outline inline-flex items-center gap-2"
          >
            Discover Our Journey
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
