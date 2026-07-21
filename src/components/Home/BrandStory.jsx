import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden bg-velmora-beige">
          <img
            src="https://via.placeholder.com/800x1000/FFF9F0/8B7355?text=Velmora+Craftsmanship"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="heading-lg">Our Story</h2>
          <div className="w-16 h-px bg-velmora-gold" />
          <div className="font-sans space-y-4 leading-relaxed text-velmora-charcoal/80">
            <p>
              At Velmora, we believe that jewelry should be more than just an accessory—it should be a treasured companion through life's most precious moments.
            </p>
            <p>
              Founded with a passion for creating demi-fine jewelry that bridges the gap between luxury and accessibility, each Velmora piece is crafted with meticulous attention to detail. We use only the finest materials—18K gold plating, hypoallergenic metals, and carefully selected crystals—to ensure that every piece feels as beautiful as it looks.
            </p>
            <p>
              Our designs draw inspiration from the natural world, vintage aesthetics, and the timeless elegance of classical jewelry. Whether you're treating yourself or searching for the perfect gift, Velmora offers pieces that celebrate individuality and the beauty of everyday moments.
            </p>
          </div>
          <Link
            to="/about"
            className="btn-secondary inline-block mt-8"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
