import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="bg-velmora-bg border-y border-velmora-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[400px] md:h-auto overflow-hidden">
          <img 
            data-strk-img-id="story-image"
            data-strk-img="[story-subtitle] [story-title] jewelry craftsmanship hands gold luxury"
            data-strk-img-ratio="2x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover grayscale-[20%]"
            alt="Jewelry Concept"
          />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-20 py-20 md:py-12">
          <div className="max-w-md">
            <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-8 tracking-wide font-light leading-tight">
              Elegance for the Modern Woman
            </h2>
            <p id="story-subtitle" className="text-[10px] uppercase tracking-[0.3em] text-velmora-muted mb-8 font-bold">Our Story</p>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-10 font-light">
              Velmora was born from a desire to create high-quality, demi-fine jewelry that doesn't compromise on style or accessibility. We believe that luxury should be part of the everyday, not just reserved for special occasions. Each piece is thoughtfully designed in our studio to inspire confidence and celebrate your unique story.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-velmora-fg text-velmora-fg hover:bg-velmora-fg hover:text-white rounded-none uppercase tracking-[0.3em] text-[10px] px-12 py-7 transition-all duration-500">
                Read Our Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
