import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          <div className="hairline w-24 mb-6" />
          <p className="text-lg leading-relaxed text-gray-700">
            At Velmora, we believe that fine jewelry should be both accessible and exceptional. 
            Each piece is thoughtfully designed and crafted with demi-fine materials, blending 
            timeless elegance with modern sensibility.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            From our studio to your jewelry box, every detail is considered — from the 18K gold 
            plating to the hypoallergenic materials that feel beautiful against your skin.
          </p>
          <Link to="/about" className="btn-secondary inline-block mt-6">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}