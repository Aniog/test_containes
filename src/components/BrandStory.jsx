import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Our Story
            </h2>
            <div className="w-16 h-px bg-velmora-gold mb-8" />
            <p className="text-lg leading-relaxed text-velmora-gray-600 mb-6">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Our pieces are crafted with intention, using 18K gold plating and hypoallergenic materials 
              that are designed to be worn and loved every day.
            </p>
            <p className="text-lg leading-relaxed text-velmora-gray-600 mb-10">
              Each design draws inspiration from the timeless elegance of heritage jewelry, 
              reimagined for the modern woman who values quiet luxury and thoughtful craftsmanship.
            </p>
            <Link
              to="/about"
              className="inline-block border border-velmora-charcoal text-velmora-charcoal px-10 py-4 text-sm tracking-widest uppercase hover:bg-velmora-charcoal hover:text-white transition-all duration-300 w-fit"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
