import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-ivory)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-sans text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Founded with a vision to make fine jewelry accessible, Velmora 
                represents the intersection of timeless elegance and modern 
                sensibility. Each piece is thoughtfully designed and crafted with 
                attention to every detail.
              </p>
              <p>
                We believe that beautiful jewelry should be within reach. Our 
                demi-fine collection uses quality materials—18K gold plating and 
                sterling silver—to create pieces that feel luxurious without the 
                luxury price tag.
              </p>
              <p>
                Every item tells a story, whether it's the gift you give someone 
                special or the treat you give yourself. We craft jewelry meant to 
                be treasured, worn, and loved every day.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;