import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light font-['Cormorant_Garamond']">
            Our Story
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold" />

          <p className="text-velmora-text-light leading-relaxed">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions.
            Every piece in our collection is designed to be lived in, loved, and layered — crafted
            with intention using 18K gold plate over brass for a luxurious finish that's accessible
            without compromising on quality.
          </p>

          <p className="text-velmora-text-light leading-relaxed">
            From our studio to your jewelry box, each piece carries our commitment to
            thoughtful design, sustainable practices, and the belief that the right piece of
            jewelry can make any moment feel a little more special.
          </p>

          <Link
            to="/about"
            className="inline-block border-b border-velmora-gold text-velmora-gold hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors tracking-wider text-sm pb-1"
          >
            READ OUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
}
