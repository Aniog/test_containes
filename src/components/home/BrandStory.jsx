import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Left */}
        <div className="relative overflow-hidden aspect-[4/5] bg-velmora-warm-gray">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide">
            Our<br />
            <span className="italic font-light">Story</span>
          </h2>
          
          <div className="hairline w-16 mb-8" />
          
          <p className="text-velmora-text-light leading-relaxed mb-6">
            At Velmora, we believe that jewelry should be treasured, not just worn. 
            Each piece in our collection is thoughtfully designed to bridge the gap between 
            accessible luxury and timeless elegance.
          </p>
          
          <p className="text-velmora-text-light leading-relaxed mb-8">
            Using 18k gold plating and hypoallergenic materials, we create demi-fine 
            jewelry that feels as beautiful as it looks. Our pieces are made for the woman 
            who appreciates quiet luxury — those who know that true elegance doesn't shout.
          </p>

          <Link
            to="/about"
            className="btn-premium-outline inline-block"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
