import React from 'react';
import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-[#FAFAF8]">
      <div className="text-center px-6">
        <h1 className="font-serif text-3xl md:text-5xl text-velmora-dark mb-4">{title}</h1>
        <div className="w-12 h-px bg-velmora-gold/30 mx-auto mb-6" />
        <p className="text-sm text-velmora-taupe mb-8 max-w-md mx-auto leading-relaxed">
          This page is coming soon. We're crafting something beautiful — check back shortly.
        </p>
        <Link
          to="/"
          className="inline-block text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-2 hover:text-velmora-gold-deep transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
