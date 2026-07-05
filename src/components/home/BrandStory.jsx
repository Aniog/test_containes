import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-50 border border-amber-200 hidden lg:block" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
                Our Story
              </h2>
              <div className="mt-4 w-16 h-px bg-amber-700" />
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg font-light">
                Every piece of Velmora jewelry begins with a vision — to create
                timeless treasures that celebrate life's most precious moments.
              </p>
              <p>
                Founded on the belief that beautiful jewelry should be accessible
                without compromising on quality, we craft each piece with meticulous
                attention to detail. Our demi-fine jewelry combines the luxury of
                18K gold plating with the durability of premium base metals.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece is
                designed to be treasured for years to come.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block border-b-2 border-amber-700 text-sm tracking-[0.15em] text-gray-900 pb-1 hover:text-amber-700 transition-colors"
            >
              DISCOVER OUR JOURNEY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
