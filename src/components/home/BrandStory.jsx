import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="bg-[#EDE8E0] overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&q=80"
            alt="Velmora atelier - artisan hands crafting gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[3px] text-[#A67C52]">SINCE 2018</span>
          <h2 className="font-serif text-4xl tracking-[1px] text-[#1C1917] mt-3 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-[#4A4640] leading-relaxed text-[15px]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over solid brass—substantial enough to feel precious, light enough to never take off.
            </p>
            <p>
              Each piece is designed in our studio and made with care by artisans who understand that true luxury lives in the details.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-[1.5px] text-[#A67C52] hover:underline"
          >
            READ MORE ABOUT US →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
