import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-cream">
            <img
              src="https://placehold.co/800x800/FAF7F2/C5A059?text=Our+Craft"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">
              Since 2019
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base mb-6 leading-[1.15]">
              Jewelry That Tells Your Story
            </h2>
            <p className="text-muted font-sans leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed to be lived in — from morning coffee to evening gatherings.
            </p>
            <p className="text-muted font-sans leading-relaxed mb-8">
              We partner with skilled artisans who share our commitment to quality and sustainability. Each design begins with a sketch and ends with a piece you will reach for every day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium tracking-wide uppercase text-base hover:text-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
