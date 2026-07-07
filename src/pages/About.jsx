import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen page-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-wide text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-12" />

        <div className="prose max-w-none">
          <p className="font-serif text-xl md:text-2xl text-brand-charcoal leading-relaxed text-center mb-8">
            Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and intention as the world's most coveted houses.
          </p>

          <div className="w-16 h-px bg-brand-sand mx-auto my-10" />

          <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
            Velmora was founded with a simple conviction: every woman deserves to wear jewelry that feels extraordinary, without the extraordinary price tag. Our demi-fine pieces are designed in our studio and crafted with meticulous attention to detail — 18K gold plating over hypoallergenic materials, finished by hand.
          </p>

          <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
            We believe in quiet luxury — pieces that speak through their craftsmanship, not their logos. Each design begins with a sketch, evolves through rigorous prototyping, and is produced in small batches to ensure quality at every step.
          </p>

          <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
            From our signature huggies to our statement necklaces, every Velmora piece is designed to be worn and treasured — not saved for special occasions. Because the most luxurious thing of all is feeling like yourself, adorned in something beautiful.
          </p>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="font-sans text-xs tracking-extra-wide uppercase px-10 py-4 bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors duration-200 inline-block btn-lift"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
