import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] woman workshop jewelry making close up"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            alt="Our craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 id="story-title" className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
            Quiet luxury, <br />craftsmanship first.
          </h2>
          <p id="story-desc" className="text-stone-500 text-lg leading-relaxed font-sans">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
            Each piece is thoughtfully designed in our London studio and handcrafted using 
            superior materials that respect both people and the planet.
          </p>
          <div>
            <Link 
              to="/about" 
              className="inline-block border-b border-stone-800 pb-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-stone-500 hover:border-stone-500 transition-all"
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
