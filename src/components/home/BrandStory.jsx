import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
        <div 
          className="aspect-square bg-zinc-200 relative"
          data-strk-bg-id="brand-story-img"
          data-strk-bg="elegant atelier woman working on fine jewelry soft lighting"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="1000"
        >
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/20 hidden md:block" />
        </div>

        <div className="max-w-md">
          <span className="text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Our philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Quiet Luxury, Echoed in Gold</h2>
          <p className="text-muted text-lg font-serif italic mb-8 leading-relaxed">
            "We believe jewelry should be more than an accessory—it's a narrative. Velmora was founded on the idea that luxury should be felt, not just seen."
          </p>
          <p className="text-zinc-500 text-sm mb-12 leading-loose font-light">
            Each piece is responsibly crafted using premium materials, designed to transition seamlessly from morning light to evening's glow. Our commitment is to timeless design and accessible quality.
          </p>
          <Link to="/about" className="inline-block border-b border-primary pb-1 text-xs uppercase tracking-widest hover:text-accent hover:border-accent transition-all">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
