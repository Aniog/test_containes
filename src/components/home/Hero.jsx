import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1600&q=80"
          alt="Gold jewelry on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-300 mb-4">
            New Collection
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-cream leading-[1.05]">
            Crafted to be <br />
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-cream/80 leading-relaxed max-w-md">
            Demi-fine jewelry designed for the modern woman. Warm gold, timeless silhouettes, and
            pieces that feel as good as they look.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/shop">
                Shop the Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-cream/40 text-cream hover:bg-cream/10">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
