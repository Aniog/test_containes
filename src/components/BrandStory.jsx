import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-velmora-cream">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1067&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-velmora-gold opacity-10 hidden md:block" />
        </div>

        {/* Text Side */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
            Crafted with<br />
            <span className="font-medium">Intention</span>
          </h2>
          
          <div className="divider-thin mb-6" />
          
          <p className="font-sans text-lg text-velmora-charcoal-light leading-relaxed mb-6">
            At Velmora, we believe jewelry should be treasured, not just worn. Each piece in our 
            collection is thoughtfully designed and crafted using 18K gold plating over high-quality 
            base metals, ensuring beauty that lasts.
          </p>
          
          <p className="font-sans text-lg text-velmora-charcoal-light leading-relaxed mb-8">
            Our demi-fine approach makes everyday luxury accessible, without compromising on quality 
            or design. From our studio to your jewelry box, every detail matters.
          </p>

          <Link 
            to="/about"
            className="btn-outline inline-block"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
