import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
        <div className="relative aspect-[3/4] lg:aspect-square overflow-hidden bg-muted">
           <img
            data-strk-img-id="brand-story-img-4k2"
            data-strk-img="[story-title] [story-desc]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          />
        </div>
        <div className="max-w-lg">
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Quiet beauty, for every day.</h2>
          <p id="story-desc" className="text-muted-foreground leading-relaxed mb-10 text-lg font-light">
            Founded on the belief that luxury should be accessible without compromise, Velmora creates demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Our pieces are crafted from 18K gold plated sterling silver and adorned with hand-picked crystals.
          </p>
          <Link to="/about" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BrandStory;
