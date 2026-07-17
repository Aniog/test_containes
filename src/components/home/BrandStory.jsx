import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Born from a love of timeless design, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and special occasion pieces. Each design is thoughtfully crafted with 18K gold plating over recycled brass, ensuring beauty that lasts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe luxury shouldn't come with a luxury price tag. Our pieces are designed in-house, ethically produced, and made to be worn, loved, and treasured for years to come.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
