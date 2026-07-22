import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 bg-velmora-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-4 text-center">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal font-light mb-8 text-center">
          Designed with Intention, Worn with Confidence
        </h1>
        <div className="space-y-6 text-center">
          <p className="font-sans text-base text-velmora-stone leading-relaxed">
            Velmora was born from a simple belief: beautiful jewelry should not be reserved for special occasions alone. Each piece is designed in our studio and crafted from 18K gold-plated brass, with meticulous attention to detail.
          </p>
          <p className="font-sans text-base text-velmora-stone leading-relaxed">
            We create demi-fine jewelry for the modern woman who appreciates quiet luxury — pieces that elevate your everyday without ever trying too hard. Every design is thoughtfully created to be versatile, comfortable, and enduring.
          </p>
          <p className="font-sans text-base text-velmora-stone leading-relaxed">
            Our commitment to quality means using only hypoallergenic, nickel-free materials. We believe in slow fashion — investing in pieces that last, rather than disposable trends.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}