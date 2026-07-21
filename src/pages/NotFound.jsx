import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-cream-100">
      <div className="text-center max-w-md mx-auto px-4">
        <p className="eyebrow text-muted-500">404</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-ink-800">
          Lost in the atelier
        </h1>
        <p className="mt-5 text-sm text-muted-500 leading-relaxed">
          The page you're looking for has wandered off — but our collection is right where you left it.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/" className="btn-outline">Back Home</Link>
          <Link to="/shop" className="btn-primary">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
}
