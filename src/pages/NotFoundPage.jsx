import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="bg-bone text-ink min-h-[60vh] flex items-center">
      <div className="container-editorial py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl font-light leading-[1.05]">
          We couldn't find that page.
        </h1>
        <p className="mt-4 font-sans text-sm text-muted-light">
          The link may be broken, or the piece may have been retired.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
