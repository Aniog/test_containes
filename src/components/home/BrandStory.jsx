import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="text-velmora-gold text-xs tracking-ultra-wide uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-6">
              Where Craft Meets Conscience
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury jewelry shouldn't come at the earth's expense. Each piece is crafted from recycled materials, plated in 18K gold, and designed to be worn every day.
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              We work with artisan workshops that share our commitment to fair wages and sustainable practices. The result is jewelry that looks beautiful, feels beautiful, and does beautiful things for the world.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-gold text-velmora-base pb-1 text-sm tracking-wide hover:text-velmora-gold transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
