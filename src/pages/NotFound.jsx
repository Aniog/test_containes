import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream text-center px-6">
      <div>
        <p className="text-xs uppercase tracking-label text-accent mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-6xl text-espresso font-light mb-6">
          Page Not Found
        </h1>
        <p className="text-taupe mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. Let's get you back to the collection.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-espresso text-white text-xs uppercase tracking-label hover:bg-accent transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
