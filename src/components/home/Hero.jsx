import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-velmora-charcoal">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="velmora-hero-bg-a3f7e1"
          data-strk-img="gold jewelry close up warm lighting model wearing elegant gold necklace and earrings editorial photography"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-velmora-charcoal/30 to-velmora-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-28 px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-velmora-cream font-light mb-4 md:mb-5 leading-[1.1]">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-velmora-cream/80 max-w-md mb-8 font-light leading-relaxed">
          Demi-fine 18K gold jewelry, designed for quiet luxury and everyday elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold hover:bg-velmora-gold-light text-velmora-charcoal px-10 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
