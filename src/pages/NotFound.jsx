import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-editorial pt-40 pb-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-5xl md:text-7xl text-ink mt-3 tracking-[-0.01em]">
        This page wandered off.
      </h1>
      <p className="mt-5 text-taupe max-w-md mx-auto">
        The piece you're looking for may have moved. Return to the collection to keep browsing.
      </p>
      <div className="mt-10 flex items-center justify-center gap-3">
        <Link to="/" className="btn-outline">Home</Link>
        <Link to="/shop" className="btn-primary">Shop All</Link>
      </div>
    </div>
  );
}
