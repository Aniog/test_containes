import React from 'react';
import { Link } from 'react-router-dom';

export function BrandStory() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Crafting jewelry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground leading-tight">Quiet Luxury, Everyday.</h2>
            <div className="space-y-6 text-[#78716c] font-serif text-lg leading-relaxed max-w-lg mb-10">
              <p>
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Our pieces are designed to be lived in, loved, and layered.
              </p>
              <p>
                Crafted with 18K gold plating over jewelers' brass, our demi-fine collections bring you the look and feel of solid gold heirlooms at an accessible price point. No green skin, no fading—just enduring beauty.
              </p>
            </div>
            <Link to="#" className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors w-fit">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
