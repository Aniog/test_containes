import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-cream/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            data-strk-img-id="brand-story-img-4a5b6c"
            data-strk-img="[story-title] [story-text] jewelry workshop editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Philosophy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Handcrafted with care</span>
            <h2 id="story-title" className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">Our Philosophy</h2>
          </div>
          <p id="story-text" className="text-lg text-muted-foreground leading-relaxed font-light">
            We believe jewelry should be more than an accessory. It should be a memory, a story, a part of who you are. 
            Velmora was founded on the idea of quiet luxury — high-end design at an accessible price point, without the traditional markup.
          </p>
          <div className="pt-4">
            <Link to="/about" className="inline-block px-12 py-4 border border-charcoal text-charcoal uppercase tracking-widest text-xs font-bold hover:bg-charcoal hover:text-white transition-all duration-300">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
