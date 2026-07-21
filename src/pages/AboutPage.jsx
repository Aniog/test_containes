import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-luxury py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Velmora Fine Jewelry was born from a simple belief: that beautiful, demi-fine jewelry
            should be accessible to everyone. Each piece is thoughtfully designed and crafted with
            care, using 18k gold plating over high-quality base metals to create jewelry that is
            both beautiful and enduring.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our collections are inspired by the timeless elegance of classic jewelry, reimagined
            for the modern woman who values quality, style, and affordability.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Explore Our Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
