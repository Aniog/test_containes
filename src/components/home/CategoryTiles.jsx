import React from "react";
import { Link } from "react-router-dom";
import { categoryTiles } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section
      aria-labelledby="categories-title"
      className="py-20 md:py-28 bg-ivory"
    >
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="kicker mb-3">Shop by Category</p>
          <h2
            id="categories-title"
            className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-ink text-balance"
          >
            Find your forever piece.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-espresso"
              aria-label={`Shop ${tile.label}`}
            >
              <img
                alt={`${tile.label} collection`}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[tile-label-${tile.id}] [categories-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="text-ivory">
                  <p
                    id={`tile-label-${tile.id}`}
                    className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-2"
                  >
                    {tile.label}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-2 font-medium text-ivory/80 group-hover:text-gold-soft transition-colors">
                    Shop the Edit
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
