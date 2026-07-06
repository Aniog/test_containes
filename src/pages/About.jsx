import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">Our Story</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Jewelry With Intention</h1>
        <p className="mt-6 text-warmgray leading-relaxed text-sm md:text-base">
          Velmora was born from a simple belief: beautiful jewelry should not be out of reach.
          We design demi-fine pieces in small batches, using 18K gold plating and responsibly sourced materials.
          Every curve, clasp, and crystal is chosen to make you feel radiant — every single day.
        </p>
        <p className="mt-4 text-warmgray leading-relaxed text-sm md:text-base">
          Based in New York, we work with skilled artisans to bring you pieces that balance timeless elegance
          with modern wearability. From our signature huggies to statement necklaces, each design is created
          with care and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-charcoal text-cream text-xs font-semibold tracking-widest uppercase hover:bg-espresso transition-colors"
        >
          Shop the Collection <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
