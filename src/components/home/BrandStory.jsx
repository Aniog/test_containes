import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-taupe-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 leading-[1.15] mb-6">
              Jewelry Made to
              <br />
              <span className="font-semibold italic">Be Worn Daily</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="text-charcoal-600 font-sans text-base leading-relaxed mb-4">
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. 
              Every piece is designed to become part of your everyday story — crafted in 18K gold 
              plating with the kind of quality that lasts.
            </p>
            <p className="text-charcoal-600 font-sans text-base leading-relaxed mb-8">
              From our hands to yours, each piece is thoughtfully made with respect for the craft 
              and for the woman who wears it.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-charcoal-800 font-sans text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors group"
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