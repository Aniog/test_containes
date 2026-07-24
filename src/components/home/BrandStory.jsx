import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Founded on the belief that fine jewelry should be accessible, Velmora creates demi-fine pieces designed for everyday wear and special moments alike.
              </p>
              <p>
                Each piece is thoughtfully crafted in small batches using 18k gold plating and hypoallergenic materials, ensuring lasting beauty without compromise.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-widest text-text-primary hover:text-accent-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
