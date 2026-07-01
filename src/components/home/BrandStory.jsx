import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-vel-bg-alt overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=80"
            alt="Velmora atelier - artisan hands working with gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-3">Since 2018</div>
          <h2 className="text-4xl md:text-5xl mb-6">Our Story</h2>
          <div className="space-y-4 text-[15px] text-vel-muted leading-relaxed">
            <p>
              Velmora was born from a desire to create jewelry that feels both special and wearable. 
              Not the loud statement pieces that sit in boxes, but the quiet treasures you reach for daily.
            </p>
            <p>
              Each piece is crafted in small batches using 18K gold plating over hypoallergenic brass. 
              We work with artisans who understand that true luxury lives in the details.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm uppercase tracking-[0.08em] border-b border-vel-text pb-0.5 hover:text-vel-gold-dark hover:border-vel-gold-dark"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
