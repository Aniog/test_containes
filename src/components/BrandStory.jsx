import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1000&auto=format&fit=crop&q=80"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-midnight-950/10" />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="section-subtitle">Our Heritage</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-midnight-900 tracking-wide mt-2 leading-tight">
              The Art of
              <br />
              <span className="italic">Quiet Luxury</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-500/40 my-6" />
            <p className="text-pearl-700 text-sm md:text-base leading-relaxed font-sans">
              At Velmora, we believe fine jewelry should be both beautiful and accessible. 
              Each piece is crafted with care using 18K gold plating over sterling silver, 
              designed to be worn daily and treasured forever.
            </p>
            <p className="text-pearl-700 text-sm md:text-base leading-relaxed mt-4 font-sans">
              From our workshop to your doorstep, we honor the tradition of fine craftsmanship 
              while reimagining it for the modern woman.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-midnight-900 text-sm tracking-widest uppercase font-sans font-medium hover:text-brand-600 transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}