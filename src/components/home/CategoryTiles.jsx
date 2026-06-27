import React from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "earrings", label: "Earrings", href: "/shop?category=earrings" },
  { id: "necklaces", label: "Necklaces", href: "/shop?category=necklaces" },
  { id: "huggies", label: "Huggies", href: "/shop?category=huggies" },
];

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Find Your Favorites
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-stone md:aspect-[4/5]"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: "#e8e2da" }}
              />
              <div className="absolute inset-0 bg-velmora-dark/20 transition-colors duration-300 group-hover:bg-velmora-dark/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${cat.id}`}
                  className="border border-velmora-cream/40 bg-velmora-cream/10 px-8 py-3 font-serif text-2xl tracking-[0.12em] text-velmora-cream backdrop-blur-sm transition-all duration-300 group-hover:border-velmora-gold group-hover:bg-velmora-gold/20"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
