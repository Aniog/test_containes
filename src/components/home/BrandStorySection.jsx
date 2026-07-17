import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="section-padding">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-4 md:px-8">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">Our Story</p>
          <h2 className="serif-heading text-3xl md:text-4xl mb-6 leading-snug">
            Jewelry That Tells<br />Your Story
          </h2>
          <div className="hairline-divider w-16 mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry 
            that bridges the gap between everyday wear and special occasion pieces. Each design 
            is thoughtfully crafted using 18K gold plating over sterling silver, ensuring 
            lasting beauty without compromise.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We believe that fine jewelry should be treasured, not locked away. Our pieces are 
            designed to be worn, loved, and passed down through generations.
          </p>
          <Link to="/about" className="btn-outline inline-block">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
