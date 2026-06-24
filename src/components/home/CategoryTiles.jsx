import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05]">
            Find your <em className="italic">forever piece</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop?cat=${c.label}`}
              className="group relative aspect-[3/4] overflow-hidden bg-parchment block"
            >
              <img
                alt={c.label}
                data-strk-img-id={c.imgId}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <span id={c.descId} className="sr-only">
                {c.query}
              </span>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-bone">
                <h3
                  id={c.titleId}
                  className="font-serif text-3xl md:text-4xl font-light"
                >
                  {c.label}
                </h3>
                <p className="text-xs tracking-[0.25em] uppercase text-bone/80 mt-2 transition-all duration-500 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  {c.blurb} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
