import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F1EDE6] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
            alt="Velmora atelier - artisan hands crafting gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] text-[#B89778] mb-3">SINCE 2018</p>
          <h2 className="serif text-4xl tracking-wide mb-6">Our Story</h2>
          <div className="space-y-4 text-[#6B645C] leading-relaxed text-[15px]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should feel personal, 
              not precious. We design demi-fine pieces that become part of your everyday — 
              worn, loved, and passed on.
            </p>
            <p>
              Each piece is crafted in small batches using 18K gold plating over solid brass, 
              chosen for its durability and warm luster. Our crystals are hand-selected. 
              Our finishes are intentionally subtle.
            </p>
          </div>
          <Link to="/about" className="inline-block mt-8">
            <Button variant="outline" className="text-sm">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
