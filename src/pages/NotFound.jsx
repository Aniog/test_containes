import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">404</p>
      <h1 className="mt-4 font-serif text-4xl font-medium text-cream md:text-6xl">
        This page has <span className="italic text-gold-soft">wandered off</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-sand">
        The page you're looking for doesn't exist — but the collection is very much here.
      </p>
      <Link
        to="/"
        className="mt-9 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
      >
        Return home
      </Link>
    </div>
  );
}
