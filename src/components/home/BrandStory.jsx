import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-lg shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif mb-6">Our Story</h2>
            <div className="hairline w-16 mb-8" />
            <p className="text-lg leading-relaxed mb-6 text-velmora-charcoal/80">
              At Velmora, we believe that fine jewelry should be both accessible and exceptional. 
              Each piece in our collection is thoughtfully designed and crafted with meticulous 
              attention to detail, using only the finest materials.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-velmora-charcoal/80">
              Our demi-fine jewelry combines the luxury of 18K gold plating with the durability 
              of high-quality base metals, creating pieces that are beautiful, wearable, and 
              made to last. Whether you're treating yourself or finding the perfect gift, 
              Velmora offers jewelry that tells your unique story.
            </p>
            <Link
              to="/about"
              className="inline-block w-fit px-8 py-3 border-2 border-velmora-charcoal text-velmora-charcoal uppercase tracking-wider text-sm hover:bg-velmora-charcoal hover:text-velmora-ivory transition-colors"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
