import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden relative group">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="editorial jewelry design craftsmanship workshop close up"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt="Craftsmanship"
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-luxury duration-1000"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Our Philosophy</span>
          <h2 id="story-title" className="text-4xl md:text-6xl font-serif leading-tight">
            Designed for <br /> <span className="italic underline underline-offset-8">Quiet Luxury</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            At Velmora, we believe that elegance should be felt, not heard. Our pieces are crafted using 18K gold plating over premium bases, ensuring longevity and a refined aesthetic that transcends trends. 
            <br /><br />
            Every collection is a dialogue between modern minimalism and timeless heritage, designed to be worn every day and cherished forever.
          </p>
          <div className="pt-4">
            <Link 
              to="/about" 
              className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-2 hover:text-accent hover:border-accent transition-luxury"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
