import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-5 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink-800">Page not found</h1>
      <p className="mt-4 text-ink-500 max-w-md text-pretty">
        The page you're looking for has wandered off. Let's get you back to the
        jewelry.
      </p>
      <Link to="/" className="btn-primary mt-8">Return Home</Link>
    </div>
  );
}
