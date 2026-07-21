import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Our Story</p>
            <h2 className="velmora-heading-lg text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <div className="velmora-divider w-16 mb-6" />
            <p className="text-[#6b6560] leading-relaxed mb-4">
              Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and special occasion pieces. Each design is thoughtfully crafted using 18K gold plating over premium base metals.
            </p>
            <p className="text-[#6b6560] leading-relaxed mb-8">
              We believe that beautiful jewelry shouldn't come with a prohibitive price tag. Our pieces are designed in-house, ethically produced, and made to be worn, loved, and treasured for years to come.
            </p>
            <Link to="/about" className="velmora-btn-outline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
