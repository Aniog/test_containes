import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Left */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] jewelry craftsmanship gold studio workshop"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Craftsmanship"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-8">
          <p className="uppercase-spaced text-[10px] text-zinc-500">Our Heritage</p>
          <h2 id="story-title" className="text-4xl md:text-6xl font-serif">A Legacy of Luminous Design</h2>
          <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
            <p>
              Founded with the belief that luxury should be accessible, Velmora traces its roots to artisanal workshops where every piece is crafted with soul.
            </p>
            <p>
              We use 18K gold plating over timeless silhouettes, creating demi-fine treasures that move with you from dawn to dusk. Each jewel is a testament to the quiet power of refined details.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block border-b border-primary pb-1 uppercase-spaced text-xs hover:text-primary transition-soft"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
