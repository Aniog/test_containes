import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
          {/* Decorative border */}
          <div className="absolute inset-4 border border-white/30 pointer-events-none" />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg">
          <h2
            className="font-serif text-4xl md:text-5xl mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Story
          </h2>

          <div className="space-y-6 font-sans text-base leading-relaxed text-velmora-charcoal/80">
            <p>
              At Velmora, we believe that jewelry should be as enduring as the
              moments it marks. Founded on the principle that luxury shouldn't be
              out of reach, we craft demi-fine pieces that bridge the gap between
              precious and accessible.
            </p>
            <p>
              Each piece in our collection is thoughtfully designed and meticulously
              crafted using 18K gold plating over high-quality brass, ensuring
              that your jewelry remains tarnish-free and beautiful for years to come.
            </p>
            <p>
              From our studio to your jewelry box, every Velmora piece carries
              our commitment to quality, sustainability, and timeless design.
            </p>
          </div>

          <Link
            to="/about"
            className="btn-premium-outline inline-block mt-10"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
