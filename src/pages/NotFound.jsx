import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-editorial min-h-[80vh] flex items-center pt-24">
      <div className="max-w-editorial mx-auto px-5 md:px-8 text-center">
        <p className="eyebrow mb-5">404</p>
        <h1 className="font-display text-cocoa-900 text-5xl md:text-7xl leading-[1.0] tracking-[-0.01em]">
          This piece isn't on the <em className="italic font-normal">shelf</em>
        </h1>
        <p className="mt-6 text-cocoa-700 text-[15px] max-w-md mx-auto leading-relaxed">
          The page you're looking for may have been moved or never existed. Let's
          get you back to the collection.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/" className="btn-outline">
            Home
          </Link>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
