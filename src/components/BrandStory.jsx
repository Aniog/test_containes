import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded overflow-hidden bg-velvet-surface">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-velvet-gold text-xs tracking-[0.2em] uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-cream leading-tight">
              Jewelry made with <span className="italic">intention</span>
            </h2>
            <div className="w-10 h-px bg-velvet-gold my-6" />
            <p className="text-velvet-taupe text-sm md:text-base leading-relaxed">
              Velmora was born from a belief that fine jewelry should be accessible without compromise. Each piece is crafted in limited runs using 18K gold plating over sterling silver — designed to be worn daily, not saved for special occasions.
            </p>
            <p className="text-velvet-taupe text-sm md:text-base leading-relaxed mt-4">
              We work directly with artisans who share our commitment to ethical production, ensuring every piece is as responsible as it is beautiful.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-velvet-gold text-xs tracking-widest uppercase mt-6 hover:text-velvet-gold-light transition-colors group"
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