import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 aspect-square bg-brand-stone/5 overflow-hidden">
        <img 
          data-strk-img-id="story-img"
          data-strk-img="[story-title] [story-text] gold jewelry artisan luxury workshop soft lighting"
          data-strk-img-ratio="1x1"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
          alt="Brand Story"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 id="story-title" className="font-serif text-4xl lg:text-5xl uppercase tracking-[0.2em] mb-8">Modern Luxury, Ancient Craft</h2>
        <p id="story-text" className="text-brand-stone leading-relaxed mb-10 font-sans text-sm md:text-base font-light">
          VELMORA was founded on the belief that fine jewelry shouldn't be reserved for special occasions. Each piece is meticulously crafted using traditional techniques and modern silhouettes, designed to be an extension of your personal style.
        </p>
        <Link 
          to="#" 
          className="inline-block border border-brand-charcoal px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-charcoal hover:text-white transition-all duration-500"
        >
          Our Story
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
