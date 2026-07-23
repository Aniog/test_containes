import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#EDE6DC] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80"
            alt="Velmora atelier — hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-3">Since 2018</p>
          <h2 className="serif text-3xl md:text-4xl tracking-[-0.01em] mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B6058] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We design demi-fine pieces in 18K gold plating that feel as precious as solid gold, 
              but accessible enough to become part of your daily ritual.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-wider border-b border-[#8C6F52] pb-0.5 hover:text-[#8C6F52]"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
