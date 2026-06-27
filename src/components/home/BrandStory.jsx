import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="hairline w-12 mb-6" />
            <p className="text-velmora-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
              Our demi-fine pieces are designed to be worn daily, layered, and loved.
            </p>
            <p className="text-velmora-600 leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over recycled brass, ensuring both luxury and sustainability. 
              We work with artisans who share our commitment to quality and ethical practices.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
