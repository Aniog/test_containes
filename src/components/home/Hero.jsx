import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="font-light italic">Treasured</em>
        </h1>
        <div className="hairline w-24 mx-auto mb-8 opacity-60" />
        <p className="font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Demi-fine gold jewelry designed for everyday luxury.
          Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-[rgb(var(--color-foreground))] px-10 py-4 font-sans text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
