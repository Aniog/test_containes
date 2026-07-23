import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
            alt="Velmora jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Our Story
          </h2>
          <div className="w-16 h-px bg-[#C9A96E]"></div>
          <p className="text-[#9A8F87] leading-relaxed">
            Founded with a passion for creating accessible luxury, Velmora crafts each piece 
            with meticulous attention to detail. Our demi-fine jewelry combines the beauty of 
            18K gold plating with the durability of premium materials, creating pieces that 
            are meant to be treasured for a lifetime.
          </p>
          <p className="text-[#9A8F87] leading-relaxed">
            Every design tells a story — of craftsmanship, of elegance, of moments that matter. 
            From our studio to your jewelry box, we're honored to be part of your journey.
          </p>
          <Link
            to="/about"
            className="inline-block border-b border-[#C9A96E] text-[#C9A96E] pb-1 
                       text-sm uppercase tracking-wider hover:text-[#B8943E] hover:border-[#B8943E] transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
