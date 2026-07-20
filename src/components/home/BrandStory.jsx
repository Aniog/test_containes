import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F8F5F1] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.15em] text-[#B8865C] mb-3">Since 2018</p>
          <h2 className="font-serif-custom text-4xl tracking-[0.05em] mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B5F57] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over sterling silver—thoughtfully designed, 
              responsibly made, and meant to become part of your story.
            </p>
          </div>
          <Link
            to="/"
            className="inline-block mt-8 text-sm uppercase tracking-[0.1em] text-[#2C2522] border-b border-[#2C2522] pb-0.5 hover:text-[#B8865C] hover:border-[#B8865C] transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
