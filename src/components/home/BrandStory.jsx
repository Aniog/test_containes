import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-beige/30">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Artisan crafted gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight mb-6">
              Jewelry With{' '}
              <span className="italic">Intention</span>
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-6" />
            <p className="text-taupe text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a belief that fine jewelry shouldn't be reserved for special occasions alone. 
              Every piece is designed to be worn — to accompany you through the ordinary moments that make a life extraordinary.
            </p>
            <p className="text-taupe text-sm md:text-base leading-relaxed mb-8">
              Crafted from 18K gold plated metals and finished by hand, our collections honor the tradition of fine jewelry 
              while embracing the intimacy of everyday adornment.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-near-black font-medium hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}