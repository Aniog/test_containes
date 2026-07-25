import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-ink-100">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="section-subtitle">Our Ethos</span>
            <h2 className="section-title mt-3">
              Jewelry That <span className="italic">Moves</span> With You
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mt-6" />
            <p className="mt-6 text-sm text-ink-600 font-sans leading-relaxed">
              At Velmora, we believe that fine jewelry should never feel fussy. 
              Every piece is designed to be worn daily — from morning meetings 
              to evening gatherings. We use premium 18K gold plating and 
              hypoallergenic metals to create pieces that endure, without 
              the traditional markup.
            </p>
            <p className="mt-4 text-sm text-ink-600 font-sans leading-relaxed">
              Our collections are crafted in small batches by artisans who 
              share our commitment to ethical production and timeless design. 
              No trends. No fast fashion. Just heirloom-quality pieces made 
              for real life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-sans font-medium tracking-wider uppercase text-ink-900 hover:text-gold-600 transition-colors group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}