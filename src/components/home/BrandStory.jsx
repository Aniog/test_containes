import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-velmora-warm">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg">
          <h2
            className="text-3xl sm:text-4xl font-light mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Story
          </h2>
          <div className="w-16 h-px bg-velmora-gold mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
            Our pieces are designed for the everyday — crafted to be worn, loved, and treasured.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Each piece is 18K gold plated with a hypoallergenic base, ensuring beauty that's 
            kind to your skin and built to last. From our studio to your jewelry box, every 
            detail is considered with care.
          </p>
          <Link
            to="/about"
            className="btn-secondary inline-block"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
