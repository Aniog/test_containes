import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[var(--color-surface-warm)] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Since 2018</span>
          <h2 className="heading-display text-4xl md:text-5xl mt-2 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
            </p>
            <p>
              We work with skilled artisans to create demi-fine pieces in 18K gold plating—each one designed to be worn daily, passed down, and loved for years.
            </p>
          </div>

          <Link to="/about" className="inline-block mt-8">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
