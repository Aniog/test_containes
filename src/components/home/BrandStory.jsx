import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
            <div className="space-y-4 text-charcoal-700 leading-relaxed">
              <p>
                Founded on the belief that fine jewelry should be both accessible and timeless, Velmora represents the modern woman's approach to luxury.
              </p>
              <p>
                Each piece is thoughtfully designed in our atelier, where traditional craftsmanship meets contemporary aesthetics. We use only the finest materials—18K gold plating, hypoallergenic alloys, and ethically sourced crystals.
              </p>
              <p>
                From our hands to yours, we create jewelry that becomes part of your story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-gold-600 hover:text-gold-700 transition-colors group"
            >
              <span className="uppercase tracking-wider text-sm font-medium">
                Learn More About Us
              </span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;