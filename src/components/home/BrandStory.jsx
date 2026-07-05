import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-velmora-gold hidden md:block" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
            <div className="w-16 h-0.5 bg-velmora-gold" />
            
            <p className="text-lg leading-relaxed text-velmora-text-light">
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
              Our pieces are designed for the woman who appreciates the art of everyday luxury.
            </p>
            
            <p className="leading-relaxed text-velmora-text-light">
              Each piece in our collection is crafted with meticulous attention to detail, using 
              18K gold plating and hypoallergenic materials. From our studio to your jewelry box, 
              we're committed to creating pieces that become part of your story.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="btn-secondary inline-block"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
