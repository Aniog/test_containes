import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden">
          <img
            src="/api/placeholder/800/1000"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-8">
            Our<br />
            <span className="font-normal">Story</span>
          </h2>
          
          <div className="hairline w-16 mb-8" />

          <p className="text-charcoal/80 font-light leading-relaxed mb-6">
            At Velmora, we believe jewelry should be more than an accessory—it should be a treasured companion through life's most meaningful moments.
          </p>

          <p className="text-charcoal/80 font-light leading-relaxed mb-6">
            Founded with a passion for demi-fine craftsmanship, we create pieces that bridge the gap between everyday elegance and special occasion luxury. Each design is thoughtfully crafted using 18K gold plating and hypoallergenic materials.
          </p>

          <p className="text-charcoal/80 font-light leading-relaxed mb-12">
            Our commitment to quality means every piece is made to last, designed to be passed down, and priced to be accessible. This is quiet luxury, redefined.
          </p>

          <Link
            to="/about"
            className="inline-block border-b-2 border-gold text-charcoal text-sm tracking-wider uppercase hover:text-gold transition-colors pb-1"
          >
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
