import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[var(--velmora-ivory)] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
            alt="Velmora atelier - artisan hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">Our Philosophy</span>
          <h2 className="font-serif text-4xl mt-3 mb-6">Jewelry that becomes part of your story.</h2>
          
          <div className="space-y-4 text-[var(--velmora-taupe)] body-text">
            <p>
              At Velmora, we believe the most meaningful pieces are the ones you reach for every day. 
              Our demi-fine collection is crafted from the finest materials, designed to be worn, loved, 
              and passed down.
            </p>
            <p>
              Each piece is plated in 18K gold and finished by hand, ensuring beauty that endures.
            </p>
          </div>

          <Link to="/about" className="inline-block mt-8">
            <Button variant="outline">OUR STORY</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
