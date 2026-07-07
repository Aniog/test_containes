import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Image side */}
      <div className="bg-bronze-200 flex items-center justify-center min-h-[300px] md:min-h-full">
        <span className="text-sm tracking-[0.25em] uppercase text-bronze-500">
          Brand Image
        </span>
      </div>

      {/* Text side */}
      <div className="bg-bronze-50 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <span className="text-[10px] tracking-[0.3em] uppercase text-taupe-400 mb-4">
          Our Story
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide leading-tight mb-6">
          Jewelry That Lives With You
        </h2>
        <p className="text-sm md:text-base text-taupe-600 leading-relaxed mb-4">
          At Velmora, we believe fine jewelry shouldn't be locked away for special occasions. 
          Our pieces are crafted to be worn every day — in the shower, at the gym, through 
          every chapter of your life.
        </p>
        <p className="text-sm md:text-base text-taupe-600 leading-relaxed mb-8">
          Each design is responsibly made with 18K gold plating over recycled brass, 
          hypoallergenic and nickel-free. Because luxury should feel as good as it looks.
        </p>
        <Link to="/shop" className="btn-outline self-start text-xs">
          Our Story
        </Link>
      </div>
    </section>
  );
}
