import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
export default function CategoryTiles() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-sand">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">Shop by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Find Your Piece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-bone"
            >
              <img
          data-strk-img-id={`category-tile-${cat.id}`}
          data-strk-img={`[category-${cat.id}-desc] [category-${cat.id}-label] gold jewelry editorial close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={800}
          alt={cat.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-ivory">
                <p
                  id={`category-${cat.id}-desc`}
                  className="text-[10px] uppercase tracking-wider2 text-goldSoft mb-2 opacity-80 transition-opacity duration-300"
                >
                  {cat.tagline}
                </p>
                <h3
                  id={`category-${cat.id}-label`}
                  className="font-serif text-3xl md:text-4xl"
                >
                  {cat.label}
                </h3>
                <span className="inline-flex items-center gap-2 mt-3 text-[11px] uppercase tracking-editorial border-b border-ivory/50 pb-0.5 group-hover:border-goldSoft group-hover:text-goldSoft transition">
                  Shop {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
