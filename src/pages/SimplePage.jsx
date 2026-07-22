import React from "react";
import { Link } from "react-router-dom";

export default function SimplePage({ kicker, title, children }) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28 pt-36 md:px-10 md:pt-44">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
        {kicker}
      </p>
      <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-espresso md:text-6xl">
        {title}
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-cocoa">
        {children}
      </div>
      <Link
        to="/shop"
        className="mt-10 inline-block border border-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
      >
        Explore the Collection
      </Link>
    </div>
  );
}
