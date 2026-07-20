import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-[var(--color-bg-alt)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1000&q=80" 
              alt="Velmora atelier - artisan hands crafting gold jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">Since 2018</p>
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not exclusive. We create demi-fine pieces that honor traditional craftsmanship while 
                embracing modern sensibilities.
              </p>
              <p>
                Each piece is designed in our studio and crafted with 18K gold plating over 
                hypoallergenic brass. We believe in quality over quantity, and in pieces that 
                become part of your everyday story.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
