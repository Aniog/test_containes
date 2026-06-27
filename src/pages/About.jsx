import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-text text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-12" />

        <div className="space-y-6 text-sm md:text-base text-velmora-text leading-relaxed">
          <p>
            Velmora was born from a simple belief: luxury should be lived in, not locked away. We create demi-fine jewelry that moves with you — from morning coffee to candlelit dinners.
          </p>
          <p>
            Founded with the vision of making high-quality, gold-plated jewelry accessible, every Velmora piece is crafted with 18K gold over 925 sterling silver. Our designs are hypoallergenic, water-resistant, and made for everyday wear — because the best jewelry is the kind you never take off.
          </p>
          <p>
            We work with skilled artisans who share our commitment to quality and detail. Each piece undergoes rigorous quality checks to ensure it meets our standards of excellence. From the initial sketch to the final polish, we pour our hearts into every creation.
          </p>
          <p>
            Our collections are designed to be mixed, matched, and layered — empowering you to express your unique style. Whether you are treating yourself or gifting someone special, Velmora pieces are crafted to be treasured.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-3xl text-velmora-gold">18K</p>
            <p className="text-xs tracking-[0.12em] uppercase text-velmora-muted mt-2">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-velmora-gold">925</p>
            <p className="text-xs tracking-[0.12em] uppercase text-velmora-muted mt-2">Sterling Silver Base</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-velmora-gold">30</p>
            <p className="text-xs tracking-[0.12em] uppercase text-velmora-muted mt-2">Day Returns</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block px-10 py-3 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-200"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
