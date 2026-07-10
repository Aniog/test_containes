import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-4">This page slipped out of the jewelry box.</h1>
      <p className="text-sand-600 max-w-md mb-8">
        The piece you're looking for may have moved. Let's get you back to the collection.
      </p>
      <Link to="/" className="btn-primary">Return home</Link>
    </div>
  );
}
