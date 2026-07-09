import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-[#E5DFD6] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-[460px]">
            <span className="text-xs tracking-[0.15em] text-[#B8976A]">EST. 2018</span>
            <h2 className="heading-lg mt-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B645E] body-lg">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn every day, not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces that feel like an extension of you — quiet, considered, and crafted to last. Each piece is made with 18K gold plating over solid brass, set with carefully selected crystals.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-widest border-b border-[#B8976A] pb-0.5 hover:text-[#B8976A]"
            >
              READ MORE ABOUT US →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;