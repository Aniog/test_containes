import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-cream">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1067&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold hidden lg:block" />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">
            Our Story
          </h2>
          <div className="w-16 h-px bg-gold mb-8" />

          <p className="text-gray-700 leading-relaxed mb-6">
            At Velmora, we believe that jewelry should be both beautiful and accessible.
            Our pieces are crafted with intention, using 18k gold plating and
            hypoallergenic materials that are designed to be worn every day.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Each design draws inspiration from the natural world and timeless
            elegance, creating pieces that feel both contemporary and destined
            to become heirlooms. We're committed to sustainable practices
            and ethical sourcing, ensuring that your jewelry not only looks
            beautiful but feels good to wear.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors tracking-wider"
          >
            Discover Our Journey
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
