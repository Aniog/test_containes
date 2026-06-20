import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-base/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl text-base mb-6">Our Story</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="space-y-5 text-base/70 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, 
                meaningful, and designed to be worn every day.
              </p>
              <p>
                Founded in California, we source the finest materials and work with skilled 
                artisans to create pieces that balance timeless elegance with modern sensibility. 
                Each design is thoughtfully crafted to become part of your personal story.
              </p>
              <p>
                We believe in quiet luxury — jewelry that speaks softly but leaves a lasting 
                impression. Our demi-fine pieces are plated in 18K gold and crafted to be 
                treasured for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-10 px-8 py-3 border border-base/20 text-sm tracking-widest uppercase text-base hover:border-gold hover:text-gold transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;