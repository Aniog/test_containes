import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeBrandStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-sand/50">
      <div className="grid grid-cols-1 md:grid-cols-2 group">
        {/* Image Left */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] fine jewelry workshop craftsmanship hands gold"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            alt="Craftsmanship"
          />
        </div>

        {/* Text Right */}
        <div className="flex flex-col justify-center p-12 md:p-24 lg:p-32 space-y-8 bg-white md:bg-transparent">
          <div className="space-y-4">
            <h2 className="text-sm font-sans underline text-brand-gold uppercase tracking-[0.3em] font-bold">Our Philosophy</h2>
            <h3 id="story-title" className="text-4xl lg:text-5xl font-serif leading-tight">
              Quiet Luxury, <br /> Timeless Appeal.
            </h3>
          </div>
          
          <p id="story-desc" className="text-muted font-sans text-lg leading-relaxed max-w-lg">
            VELMORA was born from a desire to create high-quality, demi-fine jewelry that speaks to the modern woman. We believe in pieces that are both premium and accessible, designed to be worn every day and cherished for a lifetime.
          </p>
          
          <div className="pt-6">
            <Link 
              to="/about" 
              className="inline-block border border-brand-charcoal text-brand-charcoal px-12 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand-charcoal hover:text-white transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandStory;