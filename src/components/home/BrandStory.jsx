import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="aspect-[4/5] md:aspect-auto bg-velvet-200 flex items-center justify-center min-h-[400px]">
          <div className="w-1/2 h-1/2 bg-velvet-300 rounded-full opacity-60" />
        </div>

        {/* Text side */}
        <div className="flex items-center bg-velvet-100">
          <div className="max-w-lg mx-auto px-8 md:px-16 py-16 md:py-0">
            <p className="font-sans text-xs tracking-widest uppercase text-warm-600 mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velvet-900 leading-tight mb-6">
              Jewelry that lives<br />with you
            </h2>
            <p className="font-sans text-base text-velvet-700 leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should be part of your everyday life, not locked away for special occasions. Each piece is designed in our London atelier, crafted from 18K gold-plated brass with an unwavering commitment to quality.
            </p>
            <p className="font-sans text-base text-velvet-700 leading-relaxed mb-8">
              We work directly with artisan workshops, eliminating markups and making demi-fine jewelry accessible without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block border-b-2 border-warm-600 text-warm-600 hover:text-warm-700 hover:border-warm-700 font-sans text-xs tracking-widest uppercase pb-2 transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
