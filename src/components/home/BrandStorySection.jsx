import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="hairline w-12 mb-6" />
            <p className="text-velmora-700 leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury should be felt every day, not saved for special occasions. Our demi-fine pieces are crafted with 18K gold plating over sterling silver, designed to be worn, loved, and treasured.
            </p>
            <p className="text-velmora-700 leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, balancing timeless silhouettes with modern sensibility. We source responsibly, craft carefully, and price honestly — because beautiful jewelry shouldn't come with a beautiful markup.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
