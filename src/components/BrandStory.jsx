import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-section lg:py-section-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&auto=format&q=85"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-4">Our Story</p>
            <h2 className="font-serif text-heading-lg text-charcoal mb-6">
              Jewelry That <span className="italic">Means</span> Something
            </h2>
            <div className="space-y-4 text-warm-gray font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a belief that fine jewelry should feel attainable — 
                not through compromise, but through intention. Every piece is crafted with 
                18K gold plating, genuine crystals, and the kind of detail usually reserved for 
                heirloom collections.
              </p>
              <p>
                We work directly with master artisans, bypassing traditional markup to bring you 
                demi-fine quality at honest prices. From our hands to yours, no middlemen, 
                no pretense — just beautiful jewelry made to be worn, loved, and passed down.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold font-sans transition-colors"
            >
              Read More <ArrowRight className="w-3 h-3" />
            </Link>
            <div className="w-16 h-[1px] bg-gold mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}