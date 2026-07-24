import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-6">
              Our<br />
              <span className="font-medium">Story</span>
            </h2>
            <div className="w-16 h-px bg-velmora-gold mb-8" />
          </div>

          <p className="text-lg leading-relaxed text-gray-600 font-light">
            At Velmora, we believe that jewelry should be treasured, not just worn.
            Each piece in our collection is thoughtfully designed and crafted with intention,
            using only the finest materials to create demi-fine jewelry that lasts.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 font-light">
            Our commitment to quality means using 18K gold plating, hypoallergenic materials,
            and sustainable practices. We create pieces that transition seamlessly from
            everyday wear to special occasions — jewelry that becomes part of your story.
          </p>

          <Link
            to="/about"
            className="inline-block border-b-2 border-velmora-gold text-sm tracking-[0.2em] pb-1 hover:text-velmora-gold transition-colors"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
