import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white border-y border-stone overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-stone/20 relative overflow-hidden">
            <img 
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop tools gold craft aesthetic editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-accent">Our Heritage</h2>
            <div className="space-y-6 text-muted font-light leading-relaxed">
              <p className="text-lg">
                Velmora was born from a simple desire: to create fine jewelry that doesn't demand a special occasion. We believe luxury should be lived in, layered, and loved every single day.
              </p>
              <p>
                Our pieces are more than just accessories; they are small artifacts of memory. Each design is hand-sketched in our studio and brought to life by master artisans using premium 18K gold plating over sterling silver and brass.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                to="/about" 
                className="inline-block text-xs uppercase tracking-[0.3em] font-medium border-b border-accent pb-2 hover:opacity-70 transition-opacity"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
