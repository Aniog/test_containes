import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">About Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">Our Story</h1>
        <p className="mt-8 text-warm-600 leading-relaxed">
          Velmora was founded with a simple belief: beautiful jewelry should be part of your everyday, 
          not just your special occasions. We create demi-fine pieces that bridge the gap between costume 
          and fine jewelry — offering the look and feel of luxury at a price that feels accessible.
        </p>
        <p className="mt-4 text-warm-600 leading-relaxed">
          Every piece in our collection is designed in-house and finished by hand. We use 18K gold plating 
          over hypoallergenic bases, ensuring that our jewelry is kind to sensitive skin while maintaining 
          a luminous, lasting finish.
        </p>
        <p className="mt-4 text-warm-600 leading-relaxed">
          We produce in small batches to minimize waste and maintain quality. Sustainability is not a 
          marketing line for us — it is woven into how we design, source, and package every order.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-8 py-3 border border-charcoal-900 text-charcoal-900 text-xs tracking-[0.2em] uppercase hover:bg-charcoal-900 hover:text-cream-50 transition-all duration-300"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  );
}
