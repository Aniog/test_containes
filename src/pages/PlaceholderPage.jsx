import React from 'react';
import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title, description }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">{title || 'Page Coming Soon'}</h1>
        <p className="font-sans text-lg md:text-xl mb-10 opacity-90">
          {description || 'This page is under construction. Check back soon for updates.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-velmora-charcoal text-white px-10 py-4 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
