import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-velmora-cream overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Since 2018</span>
          <h2 className="heading-serif text-4xl mt-3 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-velmora-taupe leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We design demi-fine pieces that feel as precious as fine jewelry, but accessible enough 
              to become part of your daily ritual. Each piece is crafted with intention, using 
              responsibly sourced materials and traditional techniques.
            </p>
          </div>

          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-widest uppercase border-b border-velmora-brown pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;