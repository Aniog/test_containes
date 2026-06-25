import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-32 text-center md:px-10">
      <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">Error 404</p>
      <h1 className="mt-5 font-serif text-6xl font-light italic text-ink md:text-7xl">
        Lost in the light.
      </h1>
      <p className="mt-6 text-base text-mocha">
        The page you are looking for has been moved, retired, or never existed.
      </p>
      <Link
        to="/"
        className="mt-10 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-ink-soft"
      >
        Back home
      </Link>
    </div>
  );
}
