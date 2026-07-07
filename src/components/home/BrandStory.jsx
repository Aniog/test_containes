import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=GOLD+JEWELRY"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-white m-4 pointer-events-none" />
          </div>

          {/* Text Side */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our<br />
              <em className="italic text-gold">Story</em>
            </h2>
            
            <div className="w-16 h-px bg-gold mb-6" />

            <p className="font-sans text-lg leading-relaxed text-charcoal mb-4">
              At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
              Founded with a passion for demi-fine craftsmanship, we create pieces that bridge 
              the gap between everyday elegance and special occasion luxury.
            </p>

            <p className="font-sans text-lg leading-relaxed text-warmgray mb-8">
              Each piece in our collection is thoughtfully designed and crafted with 18k gold plating, 
              ensuring that quiet luxury is accessible to every woman who seeks to express her 
              individual style.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase border-b-2 border-charcoal pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              Discover Our Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
