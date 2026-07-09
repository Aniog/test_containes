import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-16 md:gap-24 overflow-hidden">
      <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[700px] relative">
        <img
          data-strk-img-id="brand-story-img"
          data-strk-img="Classic golden jewelry workbench with tools and raw gold highlights editorial"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Brand Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-velmora-cream hidden md:block" />
      </div>

      <div className="w-full md:w-1/2 space-y-8 max-w-lg">
        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-velmora-gold">Our Philosophy</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">Quiet Luxury, Intentional Design.</h2>
        <p className="text-velmora-charcoal/70 leading-relaxed text-lg font-light">
          At Velmora, we believe jewelry should be more than an accessory. It is a storyteller, a memory-holder, and a daily ritual of self-appreciation.
        </p>
        <p className="text-velmora-charcoal/70 leading-relaxed text-lg font-light italic font-serif">
          Each piece is crafted in demi-fine gold, bridging the gap between fleeting trends and unattainable heirlooms.
        </p>
        <div className="pt-6">
          <Link
            to="/shop"
            className="text-velmora-charcoal border-b border-velmora-charcoal pb-2 uppercase tracking-widest text-xs font-bold hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
