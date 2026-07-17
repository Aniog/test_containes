import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A96E] opacity-20 hidden lg:block" />
          </div>

          {/* Text Side */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <div className="divider-hairline w-16 mb-8" />

            <p className="text-[#8A8580] leading-relaxed mb-6">
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions.
              Every piece in our collection is designed for the modern woman who appreciates
              understated elegance and exceptional quality.
            </p>

            <p className="text-[#8A8580] leading-relaxed mb-8">
              Using 18K gold plating and hypoallergenic materials, we create demi-fine jewelry
              that's beautiful enough for evening wear, durable enough for everyday. Each piece
              is crafted with intention, designed to be treasured and passed down.
            </p>

            <Link
              to="/about"
              className="btn-premium-outline inline-block"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
