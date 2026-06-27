import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="w-16 h-[1px] bg-[#C9A96E] mb-6" />
            <p className="text-[#9A9590] mb-4 leading-relaxed">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Our pieces are crafted with intention, using 18k gold plating over high-quality brass, 
              ensuring each piece is hypoallergenic and built to last.
            </p>
            <p className="text-[#9A9590] mb-8 leading-relaxed">
              From our studio to your jewelry box, every design is inspired by the timeless elegance 
              of classical jewelry, reimagined for the modern woman who values quiet luxury and 
              understated sophistication.
            </p>
            <Link
              to="/about"
              className="inline-block border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
