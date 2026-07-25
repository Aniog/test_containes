import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent hidden lg:block" />
        </div>
        
        {/* Right Side - Text */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Our Story
            </h2>
            <div className="w-16 h-px bg-accent" />
          </div>
          
          <p className="text-lg leading-relaxed text-gray-600">
            At Velmora, we believe that jewelry should be more than an accessory—it should be 
            a treasured companion to life's most meaningful moments. Our pieces are crafted with 
            intention, using only the finest 18K gold plating and hypoallergenic materials.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-600">
            Founded on the principle that luxury should be accessible, we create demi-fine jewelry 
            that bridges the gap between everyday wear and special occasions. Each piece is designed 
            to be layered, loved, and lived in.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/about"
              className="btn-outline inline-block"
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
