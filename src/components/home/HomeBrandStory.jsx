import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeBrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-text] jewelry craftsmanship workshop"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-12 -left-12 w-48 h-48 border border-accent/20 hidden lg:block" />
        </div>

        <div className="space-y-10 order-1 lg:order-2 lg:pl-12">
           <div className="space-y-4">
             <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">Our Philosophy</span>
             <h2 id="story-title" className="font-serif text-4xl md:text-5xl leading-tight">Quiet Luxury, Timeless Intent</h2>
           </div>
           
           <div id="story-text" className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-lg">
             <p>
               Velmora was born from a desire for jewelry that speaks softly but says everything. We believe in "demi-fine" as a bridge—pieces that possess the elegance of solid gold with the accessibility of modern design.
             </p>
             <p>
               Each piece is crafted using 18K gold-plated sterling silver or brass, designed to be lived in, layered, and eventually passed on. We don't believe in trends; we believe in treasures.
             </p>
           </div>

           <Link to="/about" className="inline-block text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-2 hover:text-accent hover:border-accent transition-all">
             Read Our Story
           </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandStory;
