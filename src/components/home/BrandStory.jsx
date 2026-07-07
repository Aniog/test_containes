import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our Philosophy</p>
            <h2 className="section-title mt-2 mb-6">The Art of<br />Everyday Luxury</h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that luxury should be accessible, not exclusive. 
                Every piece in our collection is designed to be worn daily — to the office, to dinner, 
                to the moments that matter most.
              </p>
              <p>
                We use 18K gold plating over responsibly sourced brass, ensuring each piece carries 
                the warmth and luster of real gold without the premium price tag. Our jewelry is 
                hypoallergenic, nickel-free, and crafted to withstand the rhythm of everyday life.
              </p>
            </div>
            <Link to="/" className="btn-outline mt-8 inline-flex">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
