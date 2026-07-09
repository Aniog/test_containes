import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
          {/* Image */}
          <div className="relative aspect-square">
            <div 
              className="absolute inset-0 z-0 bg-stone-100"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[story-title] [story-desc] woman jewelry workshop craft"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1000"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold/20 -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Our Philosophy</span>
            <h2 id="story-title" className="text-4xl sm:text-5xl font-serif leading-tight">
              Honoring the Beauty of Everyday Moments
            </h2>
            <p id="story-desc" className="text-stone-600 leading-relaxed text-lg font-light">
              Velmora was founded on the belief that luxury shouldn't be reserved for special occasions. We craft demi-fine pieces designed to be lived in, layered, and loved for a lifetime.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Using responsibly sourced 18K gold and high-quality materials, each piece tells a story of understated elegance and quiet luxury.
            </p>
            <div>
              <Link 
                to="/about"
                className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-all duration-300"
              >
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
