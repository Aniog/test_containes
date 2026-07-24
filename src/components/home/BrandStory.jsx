import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative z-10 shadow-xl">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="gold jewelry designer studio hands manual work editorial"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 -z-0 hidden md:block" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 -z-0 hidden md:block" />
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-xs uppercase tracking-[0.4em] text-muted mb-6">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Quiet Luxury, <br /> Timeless Quality</h3>
              <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">
                At Velmora, we believe that jewelry should be an extension of your spirit—subtle yet significant. Every piece is meticulously crafted using sustainable 18K gold plating over recycled brass, ensuring a premium finish that lasts.
              </p>
              <p className="text-stone-600 mb-10 leading-relaxed font-light italic">
                "We design for the woman who finds beauty in the details and value in the enduring."
              </p>
              <Link to="/about" className="btn-premium inline-block px-12">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
