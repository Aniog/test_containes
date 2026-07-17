import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Our Story</p>
            <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <hr className="velmora-divider w-16 mb-6" />
            <p className="text-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury jewelry shouldn't require a luxury budget. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              sterling silver, and finished with meticulous attention to detail.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We create demi-fine jewelry for the modern woman — pieces that transition seamlessly 
              from boardroom to dinner date, from weekend brunch to evening cocktails. Jewelry that 
              feels as good as it looks.
            </p>
            <Link to="/about" className="velmora-btn-outline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
