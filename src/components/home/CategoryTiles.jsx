import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Earrings",
    slug: "Earrings",
    description: "From delicate studs to sculptural drops",
  },
  {
    name: "Necklaces",
    slug: "Necklaces",
    description: "Layerable chains and statement pendants",
  },
  {
    name: "Huggies",
    slug: "Huggies",
    description: "Modern hoops in refined proportions",
  },
];

export function CategoryTiles() {
  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Discover</span>
        <h2 className="heading-serif text-4xl mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="category-tile group block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DC] via-[#D4C9B8] to-[#C5B8A3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-px bg-[var(--color-accent)]/40 mx-auto mb-4" />
                  <span className="text-[10px] text-[var(--color-text-muted)] tracking-[0.3em]">FINE JEWELRY</span>
                </div>
              </div>
            </div>
            <div className="category-tile-label">
              <div className="text-center text-white">
                <h3 className="heading-serif text-3xl tracking-wider mb-1">{cat.name}</h3>
                <p className="text-xs tracking-widest opacity-80">{cat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
