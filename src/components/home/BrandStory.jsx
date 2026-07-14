import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 border-y">
      <span id="story-context" className="hidden">editorial jewelry photography</span>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-brand-beige overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-text] [story-title] [story-context]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
            alt="Velmora Workshop"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <div className="space-y-8">
          <h2 id="story-title" className="font-serif text-3xl md:text-6xl leading-tight">
            Designed for <br /> the <span className="italic underline underline-offset-8">Everyday</span>
          </h2>
          <p id="story-text" className="text-gray-600 font-light leading-relaxed md:text-lg">
            Velmora was founded on the belief that luxury should be felt every day, not just on special occasions. Our demi-fine collections are crafted with 18K gold plating over premium materials, ensuring longevity and a refined aesthetic at an accessible price point.
          </p>
          <div className="pt-4">
            <Link to="/#" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2 hover:text-accent hover:border-accent transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
