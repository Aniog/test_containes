import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="gold jewelry designer studio workspace materials tools aesthetic"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col items-start">
          <span className="text-[10px] uppercase-extra text-accent mb-6 block">Our Legacy</span>
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Designed for the <br /> <span className="italic px-2">Modern Woman</span>
          </h2>
          <p className="text-base opacity-60 leading-relaxed mb-10 max-w-md">
            Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We create demi-fine pieces that bridge the gap between costume jewelry and traditional fine jewelry—high-quality materials designed to be worn every single day.
          </p>
          <Link 
            to="/about" 
            className="text-[11px] uppercase-extra border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
          >
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
