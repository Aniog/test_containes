import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
