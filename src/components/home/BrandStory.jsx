import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[var(--color-bg-alt)] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
            alt="Velmora atelier"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">SINCE 2018</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-[15px]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating and sterling silver—thoughtfully designed, 
              responsibly made, and meant to become part of your story.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-[0.1em] border-b border-[var(--color-text)] pb-0.5 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
