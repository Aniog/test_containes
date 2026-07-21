import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-96 bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora Brand Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            At Velmora, we believe that jewelry should be as unique as the moments it celebrates. 
            Founded with a passion for craftsmanship and an eye for timeless design, we create 
            demi-fine pieces that bridge the gap between luxury and accessibility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each piece is carefully crafted using 18K gold plating and hypoallergenic materials, 
            ensuring that our jewelry not only looks beautiful but feels comfortable for everyday wear.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-yellow-600 text-black pb-1 tracking-wide hover:border-black transition-colors"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
