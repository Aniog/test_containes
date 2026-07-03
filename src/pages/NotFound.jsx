import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-32 text-center">
        <p className="eyebrow text-taupe mb-3">404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink">
          Nothing here.
        </h1>
        <p className="mt-5 text-sm md:text-base text-taupe max-w-md mx-auto">
          The page you were looking for has slipped between the cases. Let us
          walk you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-xs tracking-eyebrow uppercase text-ink hover:text-gold transition-colors group"
        >
          Back to Home
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </section>
  );
}
