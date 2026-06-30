import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="bg-velmora-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        <div className="md:w-1/2 relative bg-neutral-200 min-h-[400px]">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="editorial jewelry workshop gold crafting hands"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Jewelry crafting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-velmora-cream">
          <div className="max-w-md">
             <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4 block font-bold">Our Philosophy</span>
             <h2 className="text-3xl md:text-5xl font-serif text-velmora-obsidian mb-8 leading-tight italic">
               Heirlooms for the Modern Era.
             </h2>
             <p className="text-neutral-500 font-sans leading-relaxed mb-10 text-sm md:text-base">
               At Velmora, we believe that jewelry should be more than just an accessory—it's a story of where you've been and a symbol of where you're going. Each piece in our collection is meticulously crafted with 18K gold plating and premium crystals to ensure beauty that lasts.
             </p>
             <Link 
               to="#" 
               className="text-xs uppercase tracking-widest text-velmora-obsidian font-bold border-b border-velmora-obsidian pb-2 hover:opacity-70 transition-opacity"
             >
               Read Our Story
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
