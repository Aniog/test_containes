import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F4F0E9] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=85"
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">Since 2018</p>
          <h2 className="serif text-4xl md:text-5xl tracking-[0.02em] mt-2 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[#6B6359] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should feel personal, 
              not precious. We design demi-fine pieces that live with you — through coffee runs, 
              late nights, and everything in between.
            </p>
            <p>
              Each piece is crafted in small batches using 18K gold plating over hypoallergenic 
              brass. Thoughtful details, honest materials, and a quiet kind of luxury.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 text-sm underline hover:text-[#B89778]"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
