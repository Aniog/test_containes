import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-7xl mx-auto">
        {/* Image Left */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] overflow-hidden bg-secondary">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Craftsmanship"
            className="w-full h-full object-cover"
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry craftsmanship studio gold working process elegant editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Inspired by the timeless, <br /> crafted for the modern.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
            Founded on the belief that luxury should be accessible without compromise, VELMORA creates demi-fine jewelry that breathes life into classic silhouettes. Each piece is designed in our studio, using responsibly sourced materials and a focus on enduring beauty.
          </p>
          <div className="pt-4">
            <Link 
              to="/about" 
              className="inline-block text-xs uppercase tracking-ultra-wide font-medium border-b border-stone-900 pb-2 hover:opacity-70 transition-opacity"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
