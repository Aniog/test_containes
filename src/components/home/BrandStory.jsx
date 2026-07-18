import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=80"
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-3">SINCE 2018</p>
          <h2 className="font-serif text-4xl tracking-[1px] text-[#2C2825] mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B665F] leading-relaxed text-[15px]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over sterling silver—substantial enough 
              to feel precious, accessible enough to become part of your daily ritual.
            </p>
            <p>
              Each piece is designed in our studio and made with care, intended to be passed down, 
              gifted with intention, and treasured for years.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-[1.5px] text-[#B89778] hover:text-[#8B6F47] border-b border-[#B89778] pb-0.5 transition-colors"
          >
            READ MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
