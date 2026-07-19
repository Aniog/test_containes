import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-velmora-cream">
      <h1 className="font-serif text-6xl md:text-8xl font-light text-velmora-espresso">404</h1>
      <p className="font-sans text-sm text-velmora-warmgray mt-4 tracking-wider uppercase">
        Page not found
      </p>
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-velmora-espresso text-white font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-velmora-gold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
