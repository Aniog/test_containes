import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          data-strk-img-id="story-img-882"
          data-strk-img="jewelry designer at work"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          alt="Our Story" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <h2 id="story-title" className="font-serif text-4xl md:text-6xl mb-8 tracking-tight">Elegance in <br className="hidden md:block" /> Every Detail</h2>
        <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Velmora was founded on the belief that luxury should be accessible, ethical, and effortlessly personal. We craft demi-fine jewelry that transitions seamlessly from morning sunlight to midnight glow.
        </p>
        <p className="font-sans text-muted-foreground leading-relaxed mb-12 max-w-lg">
          Using recycled 18K gold and ethically sourced stones, each piece is a celebration of the quiet moments that define us.
        </p>
        <Link to="/about" className="font-serif uppercase tracking-widest border-b border-primary py-2 text-sm hover:text-accent hover:border-accent transition-all">
          Our Story
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
