import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <img
                alt="Brand Story"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-headline] [story-desc] woman wearing delicate gold jewelry editorial"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 id="story-headline" className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              Redefining Modern Heritage
            </h2>
            <p id="story-desc" className="text-stone-600 mb-8 leading-relaxed text-lg font-light">
              Velmora was born from a desire to create demi-fine jewelry that feels both timeless and deeply personal. We believe in the power of quiet luxury—pieces that elevate your everyday without overpowering your unique essence.
            </p>
            <p className="text-stone-600 mb-10 leading-relaxed text-lg font-light">
              Crafted from premium materials, including 18k gold vermeil and ethically sourced stones, our collections are designed to be lived in, layered, and loved for a lifetime.
            </p>
            <Link to="/about" className="btn-outline border-foreground hover:border-gold-500 hover:bg-gold-500 hover:text-white inline-block">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;