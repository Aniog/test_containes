import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F5F2F0]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative aspect-[4/5] overflow-hidden group">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="minimalist jewelry workshop artisan hands craft editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Handcrafting process"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8 md:pl-8">
          <div className="space-y-4">
             <h4 id="story-label" className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">Our Story</h4>
             <h2 id="story-title" className="text-4xl md:text-5xl font-light italic leading-tight">Born from a passion for timeless elegance.</h2>
          </div>
          <p id="story-description" className="text-gray-600 font-light leading-relaxed text-lg italic">
            At Velmora, we believe that luxury should be felt every day. Our pieces are crafted using 18K gold plating over sterling silver, ensuring that each piece is as durable as it is beautiful.
          </p>
          <p className="text-gray-500 font-light leading-relaxed">
            Every collection is a tribute to the modern woman — independent, refined, and effortlessly radiant. We source only the finest materials to create jewelry that speaks to your unique story.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-widest font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all duration-300"
            >
              Learn about our craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
