import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-velmora-gold/10 border-2 border-velmora-gold/30 hidden md:block" />
          </div>

          {/* Right: Text */}
          <div className="max-w-lg">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ fontFamily: 'Cormorant Garamond', serif: true }}
            >
              Our Story
            </h2>
            <div className="hairline w-16 mb-8" />
            <p className="text-lg leading-relaxed text-velmora-charcoal mb-6">
              Every piece at Velmora is designed with intention. We believe that jewelry
              should be accessible, wearable, and made to last — not just for the moment,
              but for a lifetime.
            </p>
            <p className="text-lg leading-relaxed text-velmora-charcoal mb-10">
              Our demi-fine pieces are crafted with 18K gold plating over sustainable
              base metals, ensuring each design is hypoallergenic, tarnish-resistant,
              and beautifully affordable.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-block"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}