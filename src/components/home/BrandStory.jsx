import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/5] lg:aspect-auto lg:h-[560px] overflow-hidden bg-subtle">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest leading-tight">
              Jewelry That Feels Like Home
            </h2>
            <p className="mt-6 text-muted text-sm leading-relaxed">
              Velmora was born from a belief that luxury should be lived in, not locked away. Every piece is designed in our New York studio and crafted with 18K gold plating on hypoallergenic bases — so you can wear beauty without compromise.
            </p>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              We create for the woman who buys herself flowers, who gifts with intention, and who knows that the smallest details often mean the most.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}