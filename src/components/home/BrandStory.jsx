import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[3/4] relative rounded-sm overflow-hidden shadow-2xl">
            <img 
              data-strk-img-id="brand-story-main"
              data-strk-img="[brand-story-title] jewelry artisan workspace editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora Studio"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold font-bold mb-6 block">Our Heritage</span>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-6xl text-charcoal mb-10 leading-tight">
              Quiet Luxury, <br /> <span className="italic">Loud Quality.</span>
            </h2>
            <div className="space-y-6 text-charcoal/70 font-sans text-sm md:text-md leading-relaxed mb-10">
              <p>
                Velmora was born from a desire to bridge the gap between fast fashion jewelry and unattainable luxury. We believe that fine craftsmanship should be a part of your everyday ritual, not just reserved for the safe.
              </p>
              <p>
                Each piece is thoughtfully designed in our London studio and handcrafted by master artisans using recycled 18K gold plating over demi-fine bases. Our commitment to sustainability ensures your treasures are kind to both your skin and the planet.
              </p>
            </div>
            <Link 
              to="/about"
              className="font-sans text-xs tracking-[0.3em] uppercase font-bold border-b-2 border-charcoal pb-1 hover:text-gold hover:border-gold transition-all"
            >
              Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
