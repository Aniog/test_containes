import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="aspect-[4/3] bg-[#F2EDE6] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-lg">
          <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-3">Since 2018</p>
          <h2 className="font-serif text-4xl tracking-[0.03em] mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B645C] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over solid brass, designed to last and 
              made to be treasured. Each piece is thoughtfully designed in our studio and finished 
              by hand.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm uppercase tracking-[0.12em] border-b border-[#2C2824] pb-0.5 hover:text-[#B89778] hover:border-[#B89778]"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;