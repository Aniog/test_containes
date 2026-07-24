import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="story" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] relative">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img="[story-title] [story-content] artisan crafting gold jewelry close up workshop"
            data-strk-img-id="brand-story-img"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            alt="Artisan crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-left">
          <h2 id="story-title" className="font-heading text-4xl lg:text-5xl mb-8 tracking-wide">
            THE ART OF <br/>
            EVERYDAY LUXURY
          </h2>
          <p id="story-content" className="font-sans text-muted-foreground leading-relaxed mb-6 font-light text-lg">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
            Born from a desire to bridge the gap between inaccessible fine jewelry and fast-fashion pieces that tarnish in days.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed mb-10 font-light text-lg">
            Every piece is meticulously crafted using 18k gold vermeil—a thick layer of pure gold 
            over solid sterling silver—ensuring your favorite pieces endure as long as the memories 
            you make while wearing them.
          </p>
          
          <Link 
            to="/about"
            className="font-sans text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors font-medium"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
