import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-velmora-gold rounded-full opacity-50" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs font-medium tracking-wider uppercase text-velmora-gold mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6 leading-tight">
              Crafted with Intention,<br />
              <span className="italic">Worn with Joy</span>
            </h2>
            <p className="text-velmora-taupe leading-relaxed mb-6">
              At Velmora, we believe every piece of jewelry should tell a story. Founded in 2019, 
              our journey began with a simple vision: to create accessible luxury that celebrates 
              the everyday moments that make life extraordinary.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted by skilled artisans 
              using premium materials — 18K gold plating, hypoallergenic metals, and ethically 
              sourced stones. We believe looking good should feel good too.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
            >
              <span>Discover Our Story</span>
              <span className="w-8 h-px bg-current transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
