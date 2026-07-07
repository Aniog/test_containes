import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 aspect-[4/5] relative overflow-hidden bg-background">
          <img
            data-strk-img-id="brand-story-image"
            data-strk-img="[brand-story-title] woman hands with gold rings jewelry editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora Artisanship"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="lg:w-1/2 space-y-8">
          <h2 id="brand-story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Designed for the <br /> Modern Woman
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed font-sans text-lg">
            <p>
              Velmora was born from a desire for jewelry that balances luxury with everyday wearability. We believe that fine jewelry shouldn't be reserved for special occasions.
            </p>
            <p>
              Each piece is thoughtfully designed in our atelier, prioritizing clean lines, textured finishes, and the timeless luster of 18K gold. Our demi-fine approach means beauty you can afford to live in.
            </p>
          </div>
          <Link to="#" className="inline-block text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-all font-medium">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
