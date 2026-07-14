import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[3/4] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1067&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-velmora-gold/30 hidden lg:block" />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-6">
            Our<br />
            <em className="font-light">Story</em>
          </h2>
          
          <div className="w-16 h-px bg-velmora-gold mb-8" />

          <p className="font-sans text-base text-velmora-charcoal/80 leading-relaxed mb-6">
            Velmora was born from a simple belief: jewelry should be treasured, not just worn. 
            Each piece in our collection is thoughtfully designed to celebrate life's moments — 
            both the milestone occasions and the beautifully ordinary ones.
          </p>

          <p className="font-sans text-base text-velmora-charcoal/80 leading-relaxed mb-8">
            Using 18K gold plating and hypoallergenic materials, we create demi-fine jewelry 
            that bridges the gap between precious and accessible. Our pieces are made to be 
            layered, stacked, and worn every day — because luxury shouldn't be saved for special occasions.
          </p>

          <Link
            to="/about"
            className="inline-block border-b-2 border-velmora-gold text-velmora-gold 
                       font-sans text-sm uppercase tracking-wider
                       hover:border-velmora-gold-dark hover:text-velmora-gold-dark 
                       transition-colors duration-300 pb-1"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
