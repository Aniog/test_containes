import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
          About Velmora
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-espresso font-light leading-tight">
          Designed with Intention.
          <br />
          Made with Care.
        </h1>
        <p className="mt-6 text-stone leading-relaxed text-sm md:text-base">
          Velmora was born from a simple belief: luxury should feel accessible, and beauty should
          never come at the cost of conscience. Every piece in our collection is designed in-house
          and crafted by skilled artisans using responsibly sourced materials.
        </p>
        <p className="mt-4 text-stone leading-relaxed text-sm md:text-base">
          We create jewelry that moves with you — from morning coffee to evening celebrations.
          Pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-espresso text-cream text-xs tracking-widest font-medium uppercase hover:bg-espresso-light transition-colors"
        >
          Explore the Collection
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
