import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
        {/* Image */}
        <div className="order-2 md:order-1">
          <div className="aspect-[16/13] bg-velmora-surface-alt overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80" 
              alt="Velmora atelier - artisan hands working with gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 md:pl-4">
          <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-2">Since 2018</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.01em] leading-none mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-[15px] text-velmora-text-muted leading-relaxed max-w-[42ch]">
            <p>
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise.
            </p>
            <p>
              We work with skilled artisans to create demi-fine pieces in 18K gold plating over solid brass—designed to be worn daily, passed down, and loved for years.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-7 text-sm uppercase tracking-[0.08em] border-b border-velmora-gold pb-0.5 hover:text-velmora-gold"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
