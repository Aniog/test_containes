import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-6">Our Story</h2>
            <div className="w-12 h-px bg-gold-500 mb-8" />
            <p className="text-charcoal-700 leading-relaxed mb-6">
              Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed for real life. 
              Each piece in our collection is thoughtfully crafted using 18K gold-plated materials and ethically sourced crystals.
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-8">
              We collaborate with skilled artisans who share our commitment to quality and sustainability. 
              The result is jewelry that feels luxurious, wears beautifully, and tells a story.
            </p>
            <Link to="/about">
              <Button variant="secondary">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
