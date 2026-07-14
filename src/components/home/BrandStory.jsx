import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-beige overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=85"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs uppercase tracking-superwide font-medium mb-3">
              Our Heritage
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-charcoal leading-tight">
              The Art of
              <br />
              <span className="text-gold">Quiet Luxury</span>
            </h2>
            <div className="w-12 h-px bg-gold my-6" />
            <p className="text-taupe text-sm sm:text-base leading-relaxed">
              At Velmora, we believe jewelry should be felt, not just seen. Every
              piece is handcrafted using 18K gold plating over premium brass,
              designed to transition seamlessly from desk to dinner.
            </p>
            <p className="text-taupe text-sm sm:text-base leading-relaxed mt-4">
              Inspired by heirloom-quality craftsmanship, we create demi-fine
              pieces that are made to last — and priced to be accessible. No
              compromise, no excess. Just beautiful jewelry for the modern woman.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}