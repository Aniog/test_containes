import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] artisanal jewelry making process studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisanal Process"
            />
          </div>
          
          <div className="space-y-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-semibold">Our Philosophy</p>
            <h2 id="brand-story-title" className="text-4xl md:text-5xl font-serif leading-tight">
              Designed for life, <br /> curated for longevity.
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-lg">
              Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. 
              Our pieces are crafted using high-quality 18K gold plating over recycled brass, ensuring 
              each piece is as durable as it is beautiful.
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-lg">
              Every design is inspired by the quiet moments of luxury in everyday life—the way light hits the water, 
              the texture of old lace, the silhouette of a coastal morning.
            </p>
            <div className="pt-6">
              <Link 
                to="/about" 
                className="inline-block px-10 py-4 border border-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
