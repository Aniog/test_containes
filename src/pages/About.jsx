import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="bg-velvet-100 border-b border-velvet-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <h1 className="font-serif text-4xl md:text-6xl text-velvet-900">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="space-y-8 font-sans text-base text-velvet-700 leading-relaxed">
          <p>
            Velmora was founded in 2023 with a singular vision: to create demi-fine jewelry that women reach for every morning — not just on special occasions. We believe that the pieces you wear daily should be the ones made with the most care.
          </p>
          <p>
            Each piece is designed in our London atelier by a small team of designers who bring decades of experience from the world's most renowned jewelry houses. We craft every piece from 18K gold-plated brass, using a plating process that ensures longevity and a luminous finish.
          </p>
          <p>
            By working directly with artisan workshops and selling exclusively through our online store, we eliminate traditional markups — making fine craftsmanship accessible at $30–$120.
          </p>
          <div className="aspect-[16/9] bg-velvet-200 flex items-center justify-center my-12">
            <div className="w-1/4 h-1/4 bg-velvet-400 rounded-full opacity-60" />
          </div>
          <p>
            We're committed to responsible sourcing and ethical production. All our pieces are hypoallergenic, nickel-free, and crafted in small batches to minimize waste. Our packaging is FSC-certified and fully recyclable.
          </p>
          <p className="font-serif text-2xl text-velvet-900 italic">
            "Jewelry that lives with you — not in a box."
          </p>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-sans text-xs tracking-widest uppercase px-12 py-4 transition-colors duration-200"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
