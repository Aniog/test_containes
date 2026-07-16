import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
          <img
            data-strk-img-id="brand-story"
            data-strk-img="artisan hands crafting gold jewelry workshop warm light"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.15em] text-[#B89778] mb-3">SINCE 2019</p>
          <h2 className="font-serif text-4xl tracking-wide mb-6">Our Story</h2>
          <div className="space-y-4 text-[#5C4E42] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We design demi-fine pieces in 18K gold plating over sterling silver—thoughtfully made, 
              responsibly sourced, and priced to be collected, not coveted from afar.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-wider hover:text-[#B89778] transition-colors"
          >
            READ MORE ABOUT US →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
