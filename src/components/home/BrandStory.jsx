import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F1EDE6] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=80"
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-3">Since 2018</p>
          <h2 className="heading-serif text-3xl md:text-4xl mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B6560] text-[15px] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not exclusive. We create demi-fine pieces that honor the tradition of fine jewelry 
              while embracing a modern, everyday sensibility.
            </p>
            <p>
              Each piece is thoughtfully designed in our studio and crafted with care using 
              18K gold plating over solid brass. We source our crystals and materials from 
              suppliers who share our commitment to quality and ethics.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-[0.1em] uppercase border-b border-[#2C2825] pb-0.5 hover:text-[#8C6F4E] hover:border-[#8C6F4E] transition-colors"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
