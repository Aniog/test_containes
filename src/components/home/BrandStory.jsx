import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F8F5F1] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.15em] text-[#C5A46E] mb-3">SINCE 2018</p>
          <h2 className="font-serif-custom text-4xl tracking-[0.02em] mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[#6B665F] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating — accessible luxury that feels as good 
              as it looks. Each design is thoughtfully made to layer, to last, and to become part of your story.
            </p>
          </div>

          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-[0.05em] border-b border-[#1A1816] pb-0.5 hover:text-[#C5A46E] hover:border-[#C5A46E] transition-colors"
          >
            READ MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
